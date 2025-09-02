import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SaleReceiptOptions } from '@module/sales/models/sale-receipt';
import { Sale } from '@module/sales/models/sale.model';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { DateFtPipe } from "@shared/pipes/date-ft.pipe";
import { TranslateModule } from '@ngx-translate/core';
import { SCurrencyPipe } from "@shared/pipes/s-currency.pipe";
import { environment } from '@env/environment';
import { NgxBarcode6Module } from "ngx-barcode6";

@Component({
  selector: 'app-sale-receipt-preview',
  imports: [CommonModule, Dialog, Button, DateFtPipe, TranslateModule, SCurrencyPipe, NgxBarcode6Module],
  templateUrl: './sale-receipt-preview.component.html',
  styleUrl: './sale-receipt-preview.component.scss'
})
export class SaleReceiptPreviewComponent {

  @Input('sale') sale: Sale | null = null;
  @Input('receiptOptions') opt!: SaleReceiptOptions;
  @Input('visible') visible!: boolean;
  @Output('onHide') hide = new EventEmitter<boolean>;

  saveReceipt() {
  }

  printReceipt() {
    const printContent = document.getElementById("receipt-content");
    if (printContent) {
      const printContents = printContent.innerHTML;
      const printWindow = window.open('', '', 'height=600,width=800');

      if (printWindow) {
        const styles = Array.from(document.styleSheets)
          .map((styleSheet: any) => {
            try {
              if (styleSheet.href) {
                return `<link rel="stylesheet" type="text/css" href="${styleSheet.href}">`;
              } else if (styleSheet.cssRules) {
                const rules = Array.from(styleSheet.cssRules)
                  .map((rule: any) => rule.cssText)
                  .join('\n');
                return `<style>${rules}</style>`;
              }
            } catch (e) {
              // ignore CORS-restricted stylesheets
            }
            return '';
          })
          .join('\n');

        printWindow.document.write(`
          <html>
            <head>
              <title>Receipt</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              ${styles}
              <style>
                @page {
                  size: 80mm auto;
                  margin: 0;
                }
                @media print {
                  body {
                    margin: 0;
                    padding: 5px;
                    width: 301px;
                  }
                  .receipt-container {
                    padding: 0;
                  }
                  .dashed-line {
                    border-color: black;
                  }
                  .items th {
                    border-bottom: 1px solid black;
                  }
                }
              </style>
            </head>
            <body>
              ${printContents}
            </body>
          </html>
        `);

        printWindow.document.close();
        printWindow.onload = () => {
          printWindow.focus();
          printWindow.print();
          // printWindow.close();
        };
      }
    }
  }



  getAppLogoSrc() {
    return environment.apiBaseUrl + '/resource/' + this.opt.companyLogo;
  }

}
