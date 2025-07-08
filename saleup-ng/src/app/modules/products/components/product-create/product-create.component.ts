import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ProductCategoryService } from '../../services/product-category.service';
import { ProductUnitService } from '../../services/product-unit.service';
import { Product, ProductBrand, ProductCategory, ProductImage, ProductUnitOfMeasure } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileSelectEvent, FileUploadModule, UploadEvent } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastService } from '@shared/services/toast.service';
import { ToastModule } from 'primeng/toast';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { ProductUtils } from 'src/app/utils/product.utils';
import { Tag } from 'primeng/tag';
import { ProductImageService } from '@module/products/services/product-image.service';
import { ConfirmService } from '@shared/services/confirm.service';
import { ConfirmPopup } from 'primeng/confirmpopup';
import { environment } from '@env/environment';
import { ProductBrandService } from '@module/products/services/product-brand.service';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { BarcodeScannerLivestreamComponent, BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';


@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [
    InputTextModule,
    FluidModule,
    ButtonModule,
    SelectModule,
    FormsModule,
    InputNumberModule,
    TextareaModule,
    MultiSelectModule,
    ReactiveFormsModule,
    FileUploadModule,
    ToastModule,
    ConfirmPopup,
    TranslateModule,
    GalleriaModule,
    Tag,
    InputIcon,
    IconField,
    BarcodeScannerLivestreamModule
  ],
  templateUrl: './product-create.component.html'
})
export class ProductCreateComponent implements OnInit {
  mode = 'new';
  productForm!: UntypedFormGroup;
  loading!: boolean;
  categoryList: ProductCategory[] = [];
  brandList: ProductBrand[] = [];
  unitList: ProductUnitOfMeasure[] = [];
  imagesFiles: File[] = [];
  uploadedFiles: any[] = [];
  @ViewChild('imageUpload')
  imageUpload!: ElementRef;

  product!: Product;

  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner!: BarcodeScannerLivestreamComponent;

  constructor(
    private productService: ProductService,
    private productImageService: ProductImageService,
    private categoryService: ProductCategoryService,
    private brandService: ProductBrandService,
    private unitService: ProductUnitService,
    private toast: ToastService,
    private confirm: ConfirmService,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.fetchProductToEdit();
    this.buildFormBasic();
    this.getCategories();
    this.getBrands();
    this.getUnits();
  }

  ngAfterViewInit() {
    // this.barcodeScanner.start();
  }

  fetchProductToEdit() {
    const idParam = this.route.snapshot.paramMap.get('productId');
    if (idParam) {
      const productId = Number.parseInt(idParam);
      if (productId && Number.isInteger(productId)) {
        this.productService.getProductById(productId)
          .subscribe(res => {
            if (res.success) {
              this.product = res.data;
              this.mode = 'edit';
              this.patchFormValue();
            } else {
              this.router.navigate(['/notfound'])
            }
          })
      }
    }
  }

  patchFormValue() {
    this.productForm.patchValue({
      productName: this.product.basicDetails.productName,
      barcode: this.product.basicDetails.barcode,
      productCategoryId: this.product.basicDetails.productCategory ? [this.product.basicDetails.productCategory?.productCategoryId] : [],
      unitOfMeasureId: this.product.basicDetails.unitOfMeasure ? [this.product.basicDetails.unitOfMeasure?.unitOfMeasureId] : [],
      productBrandId: this.product.basicDetails.productBrand ? [this.product.basicDetails.productBrand?.productBrandId] : [],
      productStatusId: this.product.basicDetails.productStatus ? [this.product.basicDetails.productStatus?.productStatusId] : [],
      description: this.product.basicDetails.description,
      quantity: this.product.basicDetails.quantity,
      costPrice: this.product.priceDetails.costPrice,
      sellingPrice: this.product.priceDetails.sellingPrice,
      lowStockPoint: this.product.basicDetails.lowStockPoint
    })
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe(res => this.categoryList = res.data)
  }

  getBrands() {
    this.brandService.getAllBrands().subscribe(res => this.brandList = res.data)
  }

  getUnits() {
    this.unitService.getAllUnits().subscribe(res => this.unitList = res.data)
  }

  buildFormBasic() {
    this.productForm = this.formBuilder.group({
      productName: [null, Validators.required],
      barcode: [null, Validators.required],
      productCategoryId: [null],
      unitOfMeasureId: [null],
      productBrandId: [null],
      productStatusId: [null],
      description: [null],
      quantity: [0, Validators.required],
      costPrice: [0.0, Validators.required],
      sellingPrice: [0, Validators.required],
      lowStockPoint: [0]
    });
  }
  
  getProductRequest(): FormData {
    const formVal = this.productForm.value;
    const data = new FormData();
    if (this.product) {
      data.append('productId', this.product.productId + '')
    }
    data.append('productName', formVal['productName'])
    data.append('barcode', formVal['barcode'])
    if (formVal['productCategoryId'])
      data.append('productCategoryId', formVal['productCategoryId'])
    if (formVal['unitOfMeasureId'])
      data.append('unitOfMeasureId', formVal['unitOfMeasureId'])
    if (formVal['productBrandId'])
      data.append('productBrandId', formVal['productBrandId'])
    if (formVal['productStatusId'])
      data.append('productStatusId', formVal['productStatusId'])
    data.append('description', formVal['description'])
    data.append('quantity', formVal['quantity'])
    data.append('costPrice', formVal['costPrice'])
    data.append('quantity', formVal['quantity'])
    data.append('sellingPrice', formVal['sellingPrice'])
    data.append('lowStockPoint', '0')
    this.imagesFiles.forEach(file => {
      data.append('imageFiles', file, file.name);
    });
    return data;
  }

  onScanBarcodeChanges(value: any) {
    const barcode = value.codeResult.code.trim();
    this.productForm.patchValue({
      barcode: barcode
    })
  }

  submit() {
    if (!this.productForm.valid) {
      this.toast.showError('Make sure to enter all the required fields')
      return;
    }
    if (this.mode == 'new') {
      this.createProduct();
    }
    else if (this.mode == 'edit') {
      this.editProduct();
    }
  }

  createProduct() {
    this.loading = true;
    this.productService
      .createProduct(this.getProductRequest())
      .subscribe(res => {
        if (res.success) {
          this.loading = false;
          this.toast.showSuccess('Saved successfully')
          this.productForm.reset();
        }
      }, err => {
        this.loading = false;
        this.toast.showError(err.error?.message)
      })
  }

  editProduct() {
    this.loading = true;
    this.productService
      .editProduct(this.getProductRequest())
      .subscribe(res => {
        if (res.success) {
          this.loading = false;
          this.toast.showSuccess('Saved successfully')
        }
      }, err => {
        this.loading = false;
        this.toast.showError(err.error?.message)
      })
  }

  handleImageSelection(event: FileSelectEvent) {
    this.imagesFiles = [...event.currentFiles]
  }

  getHeader() {
    if (this.mode == 'edit')
      return this.translate.instant('EDIT_PRODUCT');
    else
      return this.translate.instant('ADD_PRODUCTS');
  }

  getProductImageSrc(productId: number, image: ProductImage) {
    return ProductUtils.getImageSrc(productId, image);
  }

  deleteImage(event: Event, image: ProductImage) {
    this.confirm.alert(event, ()=> {
      this.productImageService.deleteProductImage(image.productImageId)
      .subscribe(res => {
        if (res.success) {
          this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'))
          this.fetchProductToEdit();
        }
      })
    })
  }

  setImageAsPrimary(image: ProductImage) {
    this.productImageService.setPrimaryImage(image.productImageId)
    .subscribe(res => {
      if (res.success) {
        this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'))
        this.fetchProductToEdit();
      }
    })
  }
  
  onUpload(event: any) {
    if (event.originalEvent.body?.success) {
      this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'))
      this.fetchProductToEdit();
    } else {
      this.toast.showWarn(event.originalEvent.body?.message)
    }
  }

  getUploadPath() {
    return environment.apiBaseUrl + '/product-image/' + this.product.productId
  }

}