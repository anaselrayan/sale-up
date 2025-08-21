import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GalleriaModule } from 'primeng/galleria';
import { ReportService } from '@module/reports/services/report.service';
import { Card } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { SalesKpiResponse, SaleSummaryResponse } from '@module/reports/models/report';
import { SCurrencyPipe } from "@shared/pipes/s-currency.pipe";
import { Message } from 'primeng/message';
import { ExportColumn, ExportUtils } from 'src/app/utils/export.utils';
import { DatePicker } from 'primeng/datepicker';
import { DateUtils } from 'src/app/utils/date.utils';
import { ToastService } from '@shared/services/toast.service';
import { DateFtPipe } from "@shared/pipes/date-ft.pipe";


@Component({
  selector: 'app-sales-report',
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
    TranslateModule,
    GalleriaModule,
    TableModule,
    Card,
    Message,
    DatePicker,
    SCurrencyPipe,
    DateFtPipe
],
  templateUrl: './sales-report.component.html',
  styleUrl: './sales-report.component.scss'
})
export class SalesReportComponent {
  
  loading = false;
  rangeDate!: any[];
  kpiData!: SalesKpiResponse;
  salesData: SaleSummaryResponse[] = [];
  exportLoading = false;

  constructor(
    private reportService: ReportService,
    private toast: ToastService,
    private dateFormat: DateFtPipe,
    private translate: TranslateService
  ) {}

  loadData() {
    if (!this.rangeDate || !this.rangeDate[0] || !this.rangeDate[1]) {
      this.toast.showWarn(this.translate.instant('RANGE_DATE_ERROR'))
      return;
    }
    this.loading = true;
    const fromDate =  DateUtils.getZonedDate(this.rangeDate[0]);
    const toDate = DateUtils.getZonedDate(this.rangeDate[1]);
    this.reportService.getSalesKpiReport({
      from: fromDate, to: toDate
    })
    .subscribe(res => {
      this.kpiData = res.data;
      this.reportService.getSalesSummary({
        from: fromDate, to: toDate
      })
      .subscribe(res => {
        console.log(res)
        this.salesData = res.data;
        this.loading = false;
      })
    })
  }

  exportData() {
    this.exportLoading = true;
    ExportUtils.exportDataToExcel(this.salesData, this.getExportColumns(), 'sales_report');
    this.exportLoading = false;
  }

  getExportColumns(): ExportColumn[] {
    return  [
      { field: 'barcode', header: this.translate.instant('BARCODE') },
      { field: 'customerName', header: this.translate.instant('CUSTOMER') },
      { field: 'numberOfItems', header: this.translate.instant('CATEGORY_COUNT') },
      { field: 'totalQuantity', header: this.translate.instant('ITEMS_COUNT') },
      { field: 'returnedQuantity', header: this.translate.instant('RETURNED_ITEMS') },
      { field: 'subTotal', header: this.translate.instant('SUB_TOTAL') },
      { field: 'discount', header: this.translate.instant('DISCOUNT') },
      { field: 'grandTotal', header: this.translate.instant('GRAND_TOTAL') },
      { field: 'profit', header: this.translate.instant('RECEIPT_PROFIT') },
      { field: 'createdAt', header: this.translate.instant('CREATED_AT'), 
        valueGetter: (item) => this.dateFormat.transform(item.createdAt, 'medium') }
    ];
  }

}
