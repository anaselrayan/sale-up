import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { DialogModule } from 'primeng/dialog';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { PageRequest } from '@shared/models/page-request.model';
import { Table, TableModule } from 'primeng/table';
import { ToastService } from '@shared/services/toast.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ProductUnitOfMeasure } from '@module/products/models/product.model';
import { ProductUnitService } from '@module/products/services/product-unit.service';

@Component({
  selector: 'app-product-units',
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    InputTextModule,
    TextareaModule,
    DialogModule,
    InputIconModule,
    IconFieldModule,
    TranslateModule,
    ConfirmDialog
  ],
  templateUrl: './product-units.component.html',
  styleUrl: './product-units.component.scss'
})
export class ProductUnitsComponent {

  unitDialog = false;
  dialogHeader = 'Create Product Unit';
  loading = false;
  saveLoading = false;
  pageReq = new PageRequest(0, 10);
  unitList: ProductUnitOfMeasure[] = [];
  unit!: Partial<ProductUnitOfMeasure>;
  selectedUnits!: ProductUnitOfMeasure[] | null;
  cols!: any[];

  imageFile!: File;
  unitForm!: FormGroup;
  mode!: 'create' | 'update';

  constructor(
    private unitService: ProductUnitService,
    private toast: ToastService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.getUnits();
    this.initunitForm();
  }

  getUnits() {
    this.unitService.getAllUnits()
      .subscribe(res => {
        if (res.success) {
          this.unitList = res.data;
        }
      })
  }

  initunitForm() {
    this.unitForm = new FormGroup({
      code: new FormControl(null, [Validators.required]),
      name: new FormControl(null),
    })
  }

  onSaveUnit() {
    if (this.unitForm.invalid) {
      this.toast.showWarn(this.translate.instant('REQUIRED_FIELDS_MSG'));
      return;
    }
    if (this.mode === 'update')
      this.updateUnit()
    else this.createUnit()
  }

  updateUnit() {
    this.saveLoading = true;
    this.unitService.updateProductUnit({
      unitOfMeasureId: this.unit.unitOfMeasureId,
      code: this.unitForm.value['code'],
      name: this.unitForm.value['name']
    })
    .subscribe(res => {
      if (res.success) {
        this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'));
        this.getUnits();
        this.unitForm.reset();
        this.unitDialog = false;
      }
      else this.toast.showError(res.message);
      this.saveLoading = false;
    })
  }

  createUnit() {
    this.saveLoading = true;
    this.unitService.createProductUnit({
      code: this.unitForm.value['code'],
      name: this.unitForm.value['name']
    })
    .subscribe(res => {
      if (res.success) {
        this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'));
        this.getUnits();
        this.unitForm.reset();
        this.unitDialog = false;
      }
      else this.toast.showError(res.message);
      this.saveLoading = false;
    })
  }

  editUnit(unit: ProductUnitOfMeasure) {
    this.unit = unit;
    this.mode = 'update';
    this.unitDialog = true;
    this.dialogHeader = unit.name;
    this.unitForm.patchValue({
      code: unit.code,
      name: unit.name
    })
  }

  deleteUnit(unit: ProductUnitOfMeasure) {}

  openNew() {
    this.unitDialog = true;
  }

  deleteSelectedUnits() {}

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  onSelectImage(e: any) {
    if (e.currentFiles) {
      this.imageFile = e.currentFiles[0]
    }
  }

}
