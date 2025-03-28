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
import { PaginatorModule } from 'primeng/paginator';
import { ProductBrand } from '@module/products/models/product.model';
import { ProductBrandService } from '@module/products/services/product-brand.service';
import { FileUploadModule } from 'primeng/fileupload';
import { ProductUtils } from 'src/app/utils/product.utils';
import { ConfirmDialog } from 'primeng/confirmdialog';

@Component({
  selector: 'app-product-brands',
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
    PaginatorModule,
    FileUploadModule,
    ConfirmDialog
  ],
  templateUrl: './product-brands.component.html',
  styleUrl: './product-brands.component.scss'
})
export class ProductBrandsComponent {

  brandDialog = false;
  dialogHeader = 'Create Product Brand';
  loading = false;
  saveLoading = false;
  pageReq = new PageRequest(0, 10);
  brandList: ProductBrand[] = [];
  brand!: Partial<ProductBrand>;
  selectedBrands!: ProductBrand[] | null;
  cols!: any[];

  imageFile!: File;
  brandForm!: FormGroup;
  mode!: 'create' | 'update';

  constructor(
    private brandService: ProductBrandService,
    private toast: ToastService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.getBrands();
    this.initbrandForm();
  }

  getBrands() {
    this.brandService.getAllBrands()
      .subscribe(res => {
        if (res.success) {
          this.brandList = res.data;
        }
      })
  }

  initbrandForm() {
    this.brandForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
    })
  }

  onSaveBrand() {
    if (this.brandForm.invalid) {
      this.toast.showWarn(this.translate.instant('REQUIRED_FIELDS_MSG'));
      return;
    }

    if(this.mode === 'update')
      this.updateBrand()
    else this.createBrand();
  }

  createBrand() {
    this.saveLoading = true;
    this.brandService.createBrand(this.getBrandFormData())
    .subscribe(res => {
      if (res.success) {
        this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'));
        this.getBrands();
        this.brandForm.reset();
        this.brandDialog = false;
      }
      else this.toast.showError(res.message);
      this.saveLoading = false;
    })
  }

  updateBrand() {
    this.saveLoading = true;
    this.brandService.updateBrand(this.getBrandFormData())
    .subscribe(res => {
      if (res.success) {
        this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'));
        this.getBrands();
        this.brandForm.reset();
        this.brandDialog = false;
      }
      else this.toast.showError(res.message);
      this.saveLoading = false;
    })
  }

  getBrandFormData() {
    const formData = new FormData();
    formData.append('name', this.brandForm.value['name'])
    formData.append('description', this.brandForm.value['description'])
    if (this.imageFile)
      formData.append('image', this.imageFile)
    if(this.brand)
      formData.append('productBrandId', this.brand.productBrandId + '')

    return formData;
  }

  editBrand(brand: ProductBrand) {
    this.brand = brand;
    this.mode = 'update';
    this.brandDialog = true;
    this.dialogHeader = brand.name;
    this.brandForm.patchValue({
      name: brand.name,
      description: brand.description
    })
  }

  deleteBrand(brand: ProductBrand) {

  }

  openNew() {
    this.brandDialog = true;
  }

  deleteSelectedBrands() {}

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  onSelectImage(e: any) {
    if (e.currentFiles) {
      this.imageFile = e.currentFiles[0]
    }
  }

  getCatImageSrc(brand: ProductBrand) {
    return ProductUtils.getBrandImageSrc(brand)
  }
    
}
