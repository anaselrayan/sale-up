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
import { ToastModule } from 'primeng/toast';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GalleriaModule } from 'primeng/galleria';
import { ReportService } from '@module/reports/services/report.service';
import { Card } from 'primeng/card';
import { Table, TableModule } from 'primeng/table';
import { ProductReportResponse } from '@module/reports/models/report';
import { SCurrencyPipe } from "@shared/pipes/s-currency.pipe";
import { Message } from 'primeng/message';
import { ExportColumn, ExportUtils } from 'src/app/utils/export.utils';

@Component({
  selector: 'app-product-report',
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
    TranslateModule,
    GalleriaModule,
    TableModule,
    Card,
    Message,
    SCurrencyPipe
],
  standalone: true,
  templateUrl: './product-report.component.html',
  styleUrl: './product-report.component.scss'
})
export class ProductReportComponent {

  loading = false;
  data: ProductReportResponse[] = [];
  exportLoading = false;

  constructor(
    private reportService: ReportService,
    private translate: TranslateService
  ) {}


  loadData() {
    this.loading = true;
    this.reportService.getProductReport()
      .subscribe(res => {
        this.data = res.data
        this.loading = false;
      })
  }

  exportData() {
    this.exportLoading = true;
    ExportUtils.exportDataToExcel(this.data, this.getExportColumns(), 'product_report');
    this.exportLoading = false;
  }

  getExportColumns(): ExportColumn[] {
    return [
      { field: 'productBarcode', header: this.translate.instant('BARCODE') },
      { field: 'productName', header: this.translate.instant('PRODUCT_NAME') },
      { field: 'soldQty', header: this.translate.instant('REP_SOLD_QTY') },
      { field: 'returnedQty', header: this.translate.instant('REP_RETURNED_QTY') },
      { field: 'soldAmount', header: this.translate.instant('REP_SOLD_AMOUNT') },
      { field: 'soldProfit', header: this.translate.instant('REP_SOLD_PROFIT') },
      { field: 'availableQty', header: this.translate.instant('REP_AVAILABLE_QTY') },
      { field: 'availableProfit', header: this.translate.instant('REP_AVAILABLE_PROFIT') },
      {
        header: this.translate.instant('REP_ALL_QTY_PROFIT'),
        valueGetter: row =>
          (row.soldProfit ?? 0) + (row.availableProfit ?? 0)
      }
    ];
  }

}
