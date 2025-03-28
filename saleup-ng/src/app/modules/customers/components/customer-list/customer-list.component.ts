import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { DialogModule } from 'primeng/dialog';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PageRequest } from '@shared/models/page-request.model';
import { Table, TableModule } from 'primeng/table';
import { ToastService } from '@shared/services/toast.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Customer } from '@module/customers/models/customer.model';
import { CustomerService } from '@module/customers/service/customer.service';
import { Avatar } from 'primeng/avatar';
import { CustomerCreateDialogComponent } from "../customer-create-dialog/customer-create-dialog.component";


@Component({
  selector: 'app-customer-list',
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
    ConfirmDialogModule,
    TranslateModule,
    Avatar,
    CustomerCreateDialogComponent
],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
 
  customerDialog: boolean = false;
  dialogHeader = '';
  loading = false;
  pageReq = new PageRequest(0, 10);
  customerList: Customer[] = [];
  customer!: Partial<Customer>;
  selectedCustomers!: Customer[] | null;
  cols!: any[];

  mode!: 'create' | 'update';

  constructor(
    private customerService: CustomerService,
    private toast: ToastService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.getCustomersPage();
  }

  getCustomersPage() {
    this.loading = true;
    this.customerService.getCustomersPage(this.pageReq)
      .subscribe(res => {
        if (res.success) {
          this.customerList = res.data.content
          this.loading = false;
        }
      })
  }

  openNew() {
    this.customerDialog = true;
    this.mode = 'create'
    this.dialogHeader = 'Add Customer'
  }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  

  deleteCustomer(cat: Customer) {}

  deleteSelectedProducts() {}

  
}
