import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Table, TableModule } from 'primeng/table';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Sale } from '@module/sales/models/sale.model';
import { SaleService } from '@module/sales/services/sale.service';
import { PageRequest } from '@shared/models/page-request.model';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Page } from '@shared/models/page-response.mdel';
import { Paginator } from 'primeng/paginator';
import { SCurrencyPipe } from '@shared/pipes/s-currency.pipe';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sales-list',
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ToolbarModule,
    ConfirmDialogModule,
    TranslateModule,
    IconField,
    InputIcon,
    Menu,
    Paginator,
    SCurrencyPipe,
    RouterModule
  ],
  templateUrl: './sales-list.component.html',
  styleUrl: './sales-list.component.scss'
})
export class SalesListComponent {

  loading = false;
  pageReq = new PageRequest(0, 10);
  pageDetails?: Page;
  salesList: Sale[] = [];
  sale!: Partial<Sale>;
  selectedSales!: Sale[] | null;
  cols!: any[];

  mode!: 'create' | 'update';
  menuItems: MenuItem[] = []

  constructor(
    private saleService: SaleService,
    private translate: TranslateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getSalesPage();
  }

  getSalesPage() {
    this.loading = true;
    this.saleService.getSalesPage(this.pageReq)
      .subscribe(res => {
        if (res.success) {
          this.salesList = res.data.content;
          this.pageDetails = res.data.page;
          this.loading = false;
        }
      })
  }

  onPageChange(e: any) {
    this.pageReq.page = e.page;
    this.pageReq.size = e.rows;
    this.getSalesPage();
  }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  getMenuItems(sale: Sale) {
    this.menuItems =  [
      { label: 'Sale details', icon: 'pi pi-eye', command: ()=> { this.saleDetails(sale) } },
      { label: 'Sale return', icon: 'pi pi-undo', command: ()=> { this.saleReturn(sale) } },
      { label: 'Download receipt', icon: 'pi pi-print', command: () => { this.saleService.previewSaleReceipt(sale) } }
    ];
  }

  deleteSale(sale: Sale) {}

  deleteSelectedSales() {}

  showSaleDetails(sale: Sale) {
    
  }

  downloadReceipt(sale: Sale) {
    this.saleService.previewSaleReceipt(sale);
  }

  saleDetails(sale: Sale) {
    this.router.navigate(['sales/detail', sale.saleId])
  }

  saleReturn(sale: Sale) {
    this.router.navigate(['sales/return', sale.saleId])
  }


}
