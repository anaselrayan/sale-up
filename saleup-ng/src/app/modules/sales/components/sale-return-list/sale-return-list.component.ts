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
import { PageRequest } from '@shared/models/page-request.model';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Page } from '@shared/models/page-response.mdel';
import { Paginator } from 'primeng/paginator';
import { SCurrencyPipe } from '@shared/pipes/s-currency.pipe';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SaleReturnService } from '@module/sales/services/sale-return.service';
import { SaleReturn } from '@module/sales/models/sale-return.model';
import { DateFtPipe } from "@shared/pipes/date-ft.pipe";
import { SaleService } from '@module/sales/services/sale.service';

@Component({
  selector: 'app-sale-return-list',
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
    RouterModule,
    DateFtPipe
],
  templateUrl: './sale-return-list.component.html',
  styleUrl: './sale-return-list.component.scss'
})
export class SaleReturnListComponent {

  loading = false;
  pageReq = new PageRequest(0, 10);
  pageDetails?: Page;
  returnList: SaleReturn[] = [];
  sale!: Partial<Sale>;
  selectedSales!: Sale[] | null;
  cols!: any[];
  tableHeader = '';

  mode!: 'create' | 'update';
  menuItems: MenuItem[] = []

  constructor(
    private saleReturnService: SaleReturnService,
    private saleService: SaleService,
    private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchSaleDetails();
    this.tableHeader = this.translate.instant('SALE_RETURN_LIST')
  }

  getSaleReturnsPage() {
    this.loading = true;
    if (this.sale && this.sale.saleId) {
      this.saleReturnService.getSaleReturnsBySaleId(this.sale.saleId, this.pageReq)
      .subscribe(res => {
        if (res.success) {
          this.returnList = res.data.content;
          this.pageDetails = res.data.page;
          this.loading = false;
        }
      })
    } else {
      this.saleReturnService.getSaleReturnsPage(this.pageReq)
      .subscribe(res => {
        if (res.success) {
          this.returnList = res.data.content;
          this.pageDetails = res.data.page;
          this.loading = false;
        }
      })
    }
  }

  onPageChange(e: any) {
    this.pageReq.page = e.page;
    this.pageReq.size = e.rows;
    this.getSaleReturnsPage();
  }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  getMenuItems(sr: SaleReturn) {
    this.menuItems =  [
      { label: this.translate.instant('SHOW_DETAILS'), icon: 'pi pi-eye', command: ()=> { this.showDetails(sr) } },
      { label: this.translate.instant('EDIT'), icon: 'pi pi-pencil', command: ()=> {  } },
      { label: this.translate.instant('DELETE'), icon: 'pi pi-trash', command: ()=> {  } },
    ];
  }

  deleteSale(sale: Sale) {}

  deleteSelectedSales() {}

  showSaleDetails(sale: Sale) {
    
  }

  fetchSaleDetails() {
    this.loading = true;
    const idParam = this.route.snapshot.queryParamMap.get('saleId');
    if (idParam) {
      const saleId = Number.parseInt(idParam);
      if (saleId && Number.isInteger(saleId)) {
        this.saleService.getSaleById(saleId)
          .subscribe(res => {
            if (res.success) {
              this.sale = res.data;
              this.tableHeader = this.translate.instant('ALL_SALE_RETURNS', {name: this.sale.barcode})
              this.getSaleReturnsPage();
            } else {
              this.router.navigate(['/notfound'])
            }
            this.loading = false;
          })
      }
    }
    else this.getSaleReturnsPage();
  }

  saleDetails(sale: Sale) {
    this.router.navigate(['sales/detail', sale.saleId])
  }

  saleReturn(sale: Sale) {
    this.router.navigate(['sales/sale-return', sale.saleId])
  }

  showDetails(sr: SaleReturn) {
    this.router.navigate(['/sales/sale-return/detail', sr.saleReturnId])
  }

}
