import { Component, OnDestroy, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
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
import { DateFtPipe } from "@shared/pipes/date-ft.pipe";
import { ToastService } from '@shared/services/toast.service';
import { ConfirmService } from '@shared/services/confirm.service';
import { SaleReceiptOptions } from '@module/sales/models/sale-receipt';
import { SaleReceiptPreviewComponent } from "@shared/components/sale-receipt-preview/sale-receipt-preview.component";
import { Message } from 'primeng/message';
import { Subscription } from 'rxjs';
import { BarcodeScannerService } from '@shared/services/barcode-scanner.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-sales-list',
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    ToolbarModule,
    TranslateModule,
    IconField,
    InputIcon,
    Menu,
    Message,
    Paginator,
    SCurrencyPipe,
    RouterModule,
    DateFtPipe,
    SaleReceiptPreviewComponent
  ],
  templateUrl: './sales-list.component.html',
  styleUrl: './sales-list.component.scss'
})
export class SalesListComponent implements OnInit, OnDestroy {

  loading = false;

  pageReq = new PageRequest(0, 10);
  pageDetails?: Page;

  salesList: Sale[] = [];
  selectedSales!: Sale[] | null;

  sale!: Sale;
  menuItems: MenuItem[] = [];

  showReceiptPreview = false;
  receiptOptions!: SaleReceiptOptions;

  searchKeyword = '';           // 🔥 NEW
  private scannerSub$!: Subscription;
  private searchSubject = new Subject<string>();

  constructor(
    private saleService: SaleService,
    private translate: TranslateService,
    private toast: ToastService,
    private confirmService: ConfirmService,
    private barcodeScanner: BarcodeScannerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadSales();
    this.getSaleReceiptOptions();
    this.listenForBarcodesScanner();

    this.searchSubject
      .pipe(
        debounceTime(400),           // ⏱ delay typing
        distinctUntilChanged()
      )
      .subscribe(keyword => {
        this.searchKeyword = keyword;
        this.pageReq.page = 0;
        this.loadSales();
      });
  }

  /* =========================
     CORE DATA LOADING
     ========================= */

  loadSales(): void {
    this.loading = true;

    const request$ = this.searchKeyword
      ? this.saleService.filterSales(this.searchKeyword, this.pageReq)
      : this.saleService.getSalesPage(this.pageReq);

    request$.subscribe(res => {
      if (res.success) {
        this.salesList = res.data.content;
        this.pageDetails = res.data.page;
      }
      this.loading = false;
    });
  }

  onSearchChange(): void {
    this.searchSubject.next(this.searchKeyword);
  }

  onPageChange(event: any): void {
    this.pageReq.page = event.page;
    this.pageReq.size = event.rows;
    this.loadSales();
  }

  /* =========================
     MENU ACTIONS
     ========================= */

  getMenuItems(sale: Sale): void {
    this.menuItems = [
      {
        label: this.translate.instant('SHOW_DETAILS'),
        icon: 'pi pi-eye',
        command: () => this.saleDetails(sale)
      },
      {
        label: this.translate.instant('PRINT_RECEIPT'),
        icon: 'pi pi-print',
        command: () => this.saleService.previewSaleReceipt(sale)
      },
      {
        label: this.translate.instant('EDIT'),
        icon: 'pi pi-pen-to-square',
        disabled: sale.partiallyReturned || sale.totallyReturned,
        command: () => this.editSale(sale)
      },
      {
        label: this.translate.instant('RETURN_SALE'),
        icon: 'pi pi-arrow-right-arrow-left',
        disabled: sale.totallyReturned,
        command: () => this.saleReturn(sale)
      },
      {
        label: this.translate.instant('DELETE'),
        icon: 'pi pi-trash',
        command: () => this.deleteSale(sale)
      }
    ];
  }

  editSale(sale: Sale): void {
    this.router.navigate(['sales/edit', sale.saleId]);
  }

  saleDetails(sale: Sale): void {
    this.router.navigate(['sales/detail', sale.saleId]);
  }

  saleReturn(sale: Sale): void {
    this.router.navigate(['sales/sale-return/create', sale.saleId]);
  }

  /* =========================
     DELETE
     ========================= */

  deleteSale(sale: Sale): void {
    const msg = this.translate.instant('DELETE_ALERT', { name: sale.barcode });

    this.confirmService.dialogAlert(msg, () => {
      this.saleService.deleteSale(sale.saleId).subscribe(res => {
        if (res.success) {
          this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'));
          this.loadSales();
        }
      });
    });
  }

  deleteSelectedSales(): void {
    if (!this.selectedSales?.length) {
      this.toast.showWarn(this.translate.instant('NO_SELECTED_ITEMS'));
      return;
    }

    const msg = this.translate.instant('DELETE_SELECTED_ALERT', {
      count: this.selectedSales.length
    });

    this.confirmService.dialogAlert(msg, () => {
      this.saleService
        .deleteAll(this.selectedSales!.map(s => s.saleId))
        .subscribe(res => {
          if (res.success) {
            this.toast.showSuccess(this.translate.instant('SAVE_SUCCESS'));
            this.loadSales();
          }
        });
    });
  }

  /* =========================
     BARCODE SCANNER
     ========================= */

  listenForBarcodesScanner(): void {
    this.scannerSub$ = this.barcodeScanner.scan$.subscribe(barcode => {
      this.saleService.getSaleIdByBarcode(barcode).subscribe(res => {
        if (res.success) {
          this.router.navigate(['sales/detail', res.data]);
        } else {
          this.toast.showWarn(this.translate.instant('RECEIPT_NOT_FOUND'));
        }
      });
    });
  }

  /* =========================
     RECEIPT
     ========================= */

  previewReceipt(sale: Sale): void {
    this.sale = sale;
    this.showReceiptPreview = true;
  }

  getSaleReceiptOptions(): void {
    this.saleService.getReceiptOptions().subscribe(res => {
      this.receiptOptions = res;
    });
  }

  ngOnDestroy(): void {
    this.scannerSub$?.unsubscribe();
    this.searchSubject.complete();
  }

  exportAllReceipts(): void {
    this.confirmService.dialogAlert('This will replace all the receipt PDFs', ()=> {
      this.loading = true;
      this.saleService.exportAllReceipts()
        .subscribe(res => {
          this.loading = false;
        })
    })
  }

}
