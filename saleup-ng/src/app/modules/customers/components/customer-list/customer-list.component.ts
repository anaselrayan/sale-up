import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
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
import { Customer } from '@module/customers/models/customer.model';
import { CustomerService } from '@module/customers/service/customer.service';
import { Avatar } from 'primeng/avatar';
import { CustomerCreateDialogComponent } from "../customer-create-dialog/customer-create-dialog.component";
import { Tooltip } from 'primeng/tooltip';
import { ConfirmService } from '@shared/services/confirm.service';
import { debounceTime, finalize, switchMap } from 'rxjs';
import { Page } from '@shared/models/page-response.mdel';
import { Paginator } from "primeng/paginator";


@Component({
  selector: 'app-customer-list',
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    TextareaModule,
    DialogModule,
    InputIconModule,
    IconFieldModule,
    TranslateModule,
    Avatar,
    Tooltip,
    CustomerCreateDialogComponent,
    Paginator
],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
 
  customerDialog: boolean = false;
  dialogHeader = '';
  loading = false;
  pageReq = new PageRequest(0, 10);
  pageDetails?: Page;
  customerList: Customer[] = [];
  customer: Customer | undefined;
  selectedCustomers!: Customer[] | null;
  cols!: any[];

  mode!: 'create' | 'update';

  searchKey: string = '';
  globalSearchControl = new FormControl('');

  constructor(
    private customerService: CustomerService,
    private toast: ToastService,
    private confirm: ConfirmService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.subscribeForQuickSearch();
    this.quickSearch();
  }

  quickSearch() {
    this.loading = true;
    this.customerService.filterCustomers(this.searchKey, this.pageReq)
        .subscribe(res => {
          if (res.success) {
            this.customerList = res.data.content
            this.pageDetails = res.data.page
          }
          this.loading = false
        })
  }

  subscribeForQuickSearch() {
      this.loading = true;
      this.globalSearchControl.valueChanges.pipe(
        debounceTime(300),
        switchMap((searchTerm) => {
          this.searchKey = searchTerm || '';
          this.pageReq.page = 0;
          return this.customerService.filterCustomers(searchTerm || '', this.pageReq)
            .pipe(finalize(() => this.loading = false));
        }
      )
      ).subscribe(res => {
        if (res.success) {
          this.customerList = res.data.content;
          this.pageDetails = res.data.page;
        }
        this.loading = false;
      });
    }

  openNew() {
    this.customer = undefined;
    this.customerDialog = true;
    this.mode = 'create';
    this.dialogHeader = 'ADD_CUSTOMER';
  }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  deleteCustomer(c: Customer) {
    const msg = this.translate.instant('DELETE_ALERT', {name: c.fullName});
    this.confirm.dialogAlert(msg, ()=> {
      this.customerService.deleteCustomer(c.customerId)
        .subscribe(res => {
          if (res.success) {
            this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'));
            this.quickSearch();
          } else {
            this.toast.showError(res.message);
          }
        })
    })
  }

  editCustomer(customer: Customer) {
    this.customer = customer;
    this.mode == 'update';
    this.customerDialog = true;
  }

  toggleDialog(show: boolean) {
    this.customerDialog = show;
  }
  
  onPageChange(e: any) {
    this.pageReq.page = e.page;
    this.pageReq.size = e.rows;
    this.quickSearch();
  }

}
