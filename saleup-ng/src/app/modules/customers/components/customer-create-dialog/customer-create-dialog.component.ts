import { Component, Input, OnInit } from '@angular/core';

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
  @Input() visible: boolean = false;
  dialogHeader = '';
  saveLoading = false;

  constructor(
    private customerService: CustomerService,
    private toast: ToastService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.initCustomerForm();
  }
    
  initCustomerForm() {
    this.customerForm = new FormGroup({
      phone: new FormControl(null, [Validators.required]),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null),
      country: new FormControl(null),
      address: new FormControl(null),
    })
  }

  getCustomerRequest() {
    const payload = new CustomerRequest();
    const formVal = this.customerForm.value;
    payload.phone = formVal['phone'];
    payload.firstName = formVal['firstName'];
    payload.lastName = formVal['lastName'];
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
    this.saveLoading = true;
    this.customerService.createCustomer(this.getCustomerRequest())
      .subscribe(res => {
        this.saveLoading = false;
        if (res.success) {
          this.toast.showSuccess('Customer Created')
        }
      }, err => {
        this.toast.showError(err.error?.message)
        this.saveLoading = false;
      })
    this.visible = false;
  }

}
