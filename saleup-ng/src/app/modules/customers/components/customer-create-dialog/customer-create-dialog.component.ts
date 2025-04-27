import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ToastService } from '@shared/services/toast.service';
import { CustomerService } from '@module/customers/service/customer.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CustomerRequest } from '@module/customers/models/customer.request';
import { Customer } from '@module/customers/models/customer.model';

@Component({
  selector: 'app-customer-create-dialog',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    InputTextModule,
    DialogModule,
    TranslateModule
  ],
  templateUrl: './customer-create-dialog.component.html',
  styleUrl: './customer-create-dialog.component.scss'
})
export class CustomerCreateDialogComponent implements OnInit {

  customerForm!: FormGroup;
  @Output() visibleChange = new EventEmitter<boolean>();
  dialogHeader = 'Add Customer';
  saveLoading = false;
  @Input() mode: 'create' | 'update' = 'create';
  @Input() customer: Customer | undefined;

  constructor(
    private customerService: CustomerService,
    private toast: ToastService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    if (this.customer) this.mode = 'update';
    if (this.mode === 'create') this.dialogHeader = this.translate.instant('ADD_CUSTOMER');
    this.initCustomerForm();
    if (this.mode === 'update' && this.customer) {
      this.dialogHeader = this.translate.instant('EDIT_CUSTOMER', {name: this.customer.fullName});
      this.customerForm.patchValue({
        phone: this.customer.phone,
        fullName: this.customer.fullName,
        email: this.customer.email,
        country: this.customer.country,
        address: this.customer.address
      })
    }
  }
    
  initCustomerForm() {
    this.customerForm = new FormGroup({
      phone: new FormControl(null, [Validators.required]),
      fullName: new FormControl(null, [Validators.required]),
      email: new FormControl(null),
      country: new FormControl(null),
      address: new FormControl(null),
    })
  }

  getCustomerRequest() {
    const payload = new CustomerRequest();
    const formVal = this.customerForm.value;
    if (this.customer)
      payload.customerId = this.customer.customerId;
    payload.phone = formVal['phone'];
    payload.fullName = formVal['fullName'];
    payload.email = formVal['email'];
    payload.address = formVal['address'];
    payload.country = formVal['country'];
    return payload;
  }

  onSaveCustomer() {
    if (!this.customerForm.valid) {
      this.toast.showError(this.translate.instant('REQUIRED_FIELDS_MSG'))
      return;
    }
    if (this.mode === 'create') {
      this.saveLoading = true;
      this.customerService.createCustomer(this.getCustomerRequest())
      .subscribe(res => {
        this.saveLoading = false;
        if (res.success) {
          this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'))
          this.visibleChange.emit(false)
        } else {
          this.toast.showError(res.message)
        }
      })
    } else if (this.mode === 'update') {
      this.saveLoading = true;
      this.customerService.updateCustomer(this.getCustomerRequest())
      .subscribe(res => {
        this.saveLoading = false;
        if (res.success) {
          this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'))
          this.visibleChange.emit(false)
        } else {
          this.toast.showError(res.message)
        }
      })
    }
  }

  onVisibleChange(e: any) {
    this.visibleChange.emit(e)
  }

}
