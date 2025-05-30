import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { ProductDiscountRequest } from '@module/products/models/product-request';
import { DiscountType, Product } from '@module/products/models/product.model';
import { ProductService } from '@module/products/services/product.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputNumber } from 'primeng/inputnumber';
import { Select } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { DatePicker } from 'primeng/datepicker';
import { DateUtils } from 'src/app/utils/date.utils';
import { ToggleButton } from 'primeng/togglebutton';
import { SubstringPipe } from "@shared/pipes/substring.pipe";

@Component({
  selector: 'app-product-discount-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    Dialog,
    Button,
    InputNumber,
    Select,
    ToastModule,
    DatePicker,
    ToggleButton,
    SubstringPipe
],
  templateUrl: './product-discount-create.component.html',
  styleUrl: './product-discount-create.component.scss'
})
export class ProductDiscountCreateComponent {
  form!: FormGroup;
  @Input("product") product!: Product;
  discountTypes: any = [];
  loading = false;
  dialogHeader = 'Product Discount: ';
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() success = new EventEmitter<boolean>();

  constructor(
    private productService: ProductService,
    private formBuilder: UntypedFormBuilder,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.discountTypes = [
      {
        label: this.translate.instant('FIXED_VALUE'),
        value: DiscountType.FIXED
      },
      {
        label: this.translate.instant('PERCENT_VALUE'),
        value: DiscountType.PERCENT
      }
    ]
    this.initForm();
    if(this.product) {
      this.dialogHeader += this.product.basicDetails.productName;
      this.form.patchValue({
        active: !this.product.priceDetails.discountDisabled,
        type: this.product.priceDetails.discountType,
        amount: this.product.priceDetails.discountAmount,
        range: this.product.priceDetails.discountStartDate && this.product.priceDetails.discountEndDate ?  
        [ new Date(this.product.priceDetails.discountStartDate),
          new Date(this.product.priceDetails.discountEndDate) ] : []
      })
    }
  }

  submit() {
    if (this.product && this.form.valid && this.form.value['range'][0] && this.form.value['range'][1]) {
      this.loading = true;
      this.productService.createProductDiscount(this.getDiscountRequest())
        .subscribe(res => {
          if (res.success) {
            this.success.emit(true);
          }
          this.success.emit(false);
          this.loading = false;
        })
      
      return;
    }
  }

  initForm() {
    this.form = this.formBuilder.group({
      active: [false],
      type: [this.discountTypes[0], Validators.required],
      amount: [0.0, Validators.required],
      range: [null, Validators.required],
    })
  }

  getDiscountRequest(): ProductDiscountRequest {
    const req = new ProductDiscountRequest();
    req.productId = this.product.productId;
    req.discountActive = this.form.value['active'] ? true : false;
    req.discountType = this.form.value['type'];
    req.discountAmount = this.form.value['amount'];
    req.discountStartDate = DateUtils.getZonedDate(this.form.value['range'][0]);
    req.discountEndDate = DateUtils.getZonedDate(this.form.value['range'][1]);
    return req;
  }

  onVisibleChange(e: any) {
    this.visibleChange.emit(e);
  }

}
