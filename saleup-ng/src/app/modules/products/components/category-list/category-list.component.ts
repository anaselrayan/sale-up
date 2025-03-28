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
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProductCategory } from '../../models/product.model';
import { PageRequest } from '@shared/models/page-request.model';
import { Table, TableModule } from 'primeng/table';
import { ProductCategoryService } from '@module/products/services/product-category.service';
import { ToastService } from '@shared/services/toast.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FileUploadModule } from 'primeng/fileupload';
import { ProductUtils } from 'src/app/utils/product.utils';
import { ConfirmService } from '@shared/services/confirm.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
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
    FileUploadModule,
    ConfirmDialog
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {
  categoryDialog: boolean = false;
  dialogHeader = '';
  loading = false;
  saveLoading = false;
  pageReq = new PageRequest(0, 10);
  categoryList: ProductCategory[] = [];
  category!: Partial<ProductCategory>;
  selectedCategories!: ProductCategory[] | null;
  cols!: any[];
  imageFile!: File;

  mode!: 'create' | 'update';
  catForm!: FormGroup;

  constructor(
    private categoryService: ProductCategoryService,
    private toast: ToastService,
    private confirm: ConfirmService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.initCategoryForm();
    this.getCategories();
  }

  initCategoryForm() {
    this.catForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null)
    })
  }

  getCategories() {
    this.loading = true;
    this.categoryService.getAllCategories()
      .subscribe(res => {
        if (res.success) {
          this.categoryList = res.data
          this.loading = false;
        }
      })
  }

  openNew() {
    this.categoryDialog = true;
    this.mode = 'create'
    this.dialogHeader = 'Add Category'
    this.catForm.reset();
  }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }


  editCategory(cat: ProductCategory) {
    this.category = cat;
    this.mode = 'update';
    this.categoryDialog = true;
    this.dialogHeader = cat.name;
    this.catForm.patchValue({
      name: cat.name,
      description: cat.description
    })
  }

  deleteCategory(cat: ProductCategory) {
    const msg = 'Are you sure you want to proceed?'
    this.confirm.dialogAlert(msg, ()=> {
      this.categoryService.deleteCategory(cat.productCategoryId)
        .subscribe(res => {
          if (res.success) {
            this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'))
            this.getCategories();
          }
        })
    })
  }

  deleteSelectedProducts() {}

  getCategoryRequest() {
    const formVal = this.catForm.value;
    const payload = new FormData();
    if (this.category)
      payload.append('productCategoryId', this.category.productCategoryId + '')
    if (this.imageFile)
      payload.append('image', this.imageFile);
    payload.append('name', formVal['name'])
    payload.append('description', formVal['description'] || '')
    return payload;
  }

  onSaveCategory() {
    if (!this.catForm.valid) {
      this.toast.showError(this.translate.instant('REQUIRED_FIELDS_MSG'))
      return;
    }
    if (this.mode === 'update') {
      this.updateProductCategory();
    } else {
      this.createProductCategory();
    }
  }

  createProductCategory() {
    this.saveLoading = true;
    this.categoryService.createProductCategory(this.getCategoryRequest())
      .subscribe(res => {
        this.saveLoading = false;
        if (res.success) {
          this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'))
          this.getCategories();
          this.categoryDialog = false;
        }
      }, err => {
        this.toast.showError(err.error?.message)
        this.saveLoading = false;
      })
  }

  updateProductCategory() {
    this.saveLoading = true;
    this.categoryService.updateProductCategory(this.getCategoryRequest())
      .subscribe(res => {
        this.saveLoading = false;
        if (res.success) {
          this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'));
          this.getCategories();
          this.categoryDialog = false;
        }
        else {
          this.toast.showError(res.message)
        }
      }, err => {
        this.toast.showError(err.error?.message)
        this.saveLoading = false;
      })
  }

  onSelectImage(e: any) {
    if (e.currentFiles) {
      this.imageFile = e.currentFiles[0]
    }
  }

  getCatImageSrc(categroy: ProductCategory) {
    return ProductUtils.getCategoryImageSrc(categroy)
  }

}
