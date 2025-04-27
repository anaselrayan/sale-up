import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '@env/environment';
import { SettingRequest } from '@module/settings/models/setting-request';
import { Setting, SettingType } from '@module/settings/models/setting.model';
import { SettingService } from '@module/settings/services/setting.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FileService } from '@shared/services/file.service';
import { ToastService } from '@shared/services/toast.service';
import { ButtonModule } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';
import { FileUploadModule, UploadEvent } from 'primeng/fileupload';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBar } from 'primeng/progressbar';
import { Select } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';
import { ToastModule } from 'primeng/toast';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-system-settings',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    TabsModule,
    IconFieldModule,
    InputIconModule,
    TranslateModule,
    Select,
    ToastModule,
    FileUploadModule,
    ProgressBar,
    Checkbox
  ],
  templateUrl: './system-settings.component.html',
  styleUrl: './system-settings.component.scss'
})
export class SystemSettingsComponent {

  settings: Setting[] = [];
  payloads: SettingRequest[] = [];
  settingFiles: {key: string, file: File}[] = [];
  saveLoading = false;
  loading = false;
  settingCategory: string | number = "setting.app";

  constructor(
    private settingService: SettingService,
    private fileService: FileService,
    private translate: TranslateService,
    private toast: ToastService) {}

  ngOnInit() {
    this.loadCategorySettings()
  }

  loadCategorySettings() {
    this.loading = true;
    this.settingService.getSettingsByCategory(this.settingCategory.toString())
    .subscribe(res => {
      if (res.success) {
        this.settings = res.data;
      }
      this.loading = false;
    })
  }

  settingChange(setting: Setting) {
    console.log(setting)
    const payload = this.payloads.find(p => p.key === setting.key);
    if (payload) {
      payload.value = setting.value;
    } else {
      const p = new SettingRequest();
      p.key = setting.key;
      p.value = setting.value;
      this.payloads.push(p);
    }
  }

  saveSettings() {
    this.saveLoading = true;
  
    // If there are no setting files, directly update the settings
    if (!this.settingFiles || this.settingFiles.length === 0) {
      this.updateSettingsWithPayloads();
      return;
    }
  
    // Proceed with file upload if there are setting files
    const fileUploadObservables = this.settingFiles.map(s =>
      this.fileService.uploadStaticFile(s.file).pipe(
        map(res => {
          if (res.success) {
            return { key: s.key, value: res.data.fileName };
          }
          return null; // Handle error case or failed upload
        })
      )
    );
  
    // Wait for all file uploads to complete
    forkJoin(fileUploadObservables).subscribe(uploadResults => {
      // Filter out null results if any upload failed
      const successfulUploads = uploadResults.filter(result => result !== null);
      this.payloads.push(...successfulUploads);
  
      // Now update the settings with the payloads
      this.updateSettingsWithPayloads();
    });
  }
  
  updateSettingsWithPayloads() {
    this.settingService.updateSettings(this.payloads).subscribe(res => {
      if (res.success) {
        this.loadCategorySettings();
        this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'));
        window.location.reload();
      }
      this.saveLoading = false;
    });
  }

  getUploadPath() {
    return environment.apiBaseUrl + '/resource';
  }

  onSelectFile(setting: Setting, e: any) {
    const target = this.settingFiles.find(s => s.key === setting.key)
    if (target) {
      target.file = e.files[0]
    } else {
      this.settingFiles.push({key: setting.key, file: e.files[0]})
    }
  }

  onChangeTab(cat: any) {
    this.payloads = [];
    this.settingFiles = [];
    this.settingCategory = cat;
    this.loadCategorySettings();
  }

}
