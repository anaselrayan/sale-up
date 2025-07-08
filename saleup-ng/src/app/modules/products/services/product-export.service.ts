import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import { applyPlugin } from 'jspdf-autotable'

import { Product } from '../models/product.model';
import { Observable, of, throwError } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ProductExportService {

  constructor(private translate: TranslateService) { applyPlugin(jsPDF) }

  exportProducts(products: Product[], columns: string[], exportType: 'excel' | 'pdf', fileName: string): Observable<any> {
    if (!products || products.length === 0) {
      return throwError(() => new Error(this.translate.instant("NO_DATA_TO_EXPORT")));
    }

    const data = this.prepareExportData(products, columns);
    const headers = this.prepareExportHeaders(columns);

    if (exportType === 'excel') {
      return this.exportToExcel(data, headers, fileName);
    } else if (exportType === 'pdf') {
      return this.exportToPdf(data, headers, fileName);
    }
    return throwError(() => new Error(this.translate.instant("UNSUPPORTED_EXPORT_TYPE")));
  }

  private prepareExportData(products: Product[], columns: string[]): any[][] {
    return products.map(product => {
      const row: any[] = [];
      columns.forEach(col => {
        // Handle nested properties
        let value: any = product;
        col.split('.').forEach(key => {
          if (value) {
            value = value[key];
          }
        });

        // Special handling for discount label if needed (e.g., if you want the formatted string)
        if (col === 'priceDetails.discountAmount') {
          value = this.getDiscountLabelForExport(product);
        } else if (col === 'priceDetails.priceWithDiscount') {
            value = product.priceDetails.priceWithDiscount; // Use the calculated value directly
        } else if (col === 'basicDetails.productCategory.name' && !product.basicDetails.productCategory) {
            value = ''; // Handle cases where category might be null
        } else if (col === 'basicDetails.productBrand.name' && !product.basicDetails.productBrand) {
            value = ''; // Handle cases where brand might be null
        }

        row.push(value !== undefined ? value : ''); // Push empty string for undefined values
      });
      return row;
    });
  }

  private prepareExportHeaders(columns: string[]): string[] {
    return columns.map(col => {
      // Basic transformation for header names, can be made more sophisticated
      // e.g., using a translation service if you have mappings for column fields
      const parts = col.split('.');
      let headerKey = parts[parts.length - 1]; // Get the last part of the field path
      // Replace common camelCase or dot notations with spaces for better readability
      headerKey = headerKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      headerKey = headerKey.replace('basic Details ', '').replace('price Details ', ''); // Clean up prefixes
      return this.translate.instant(headerKey.toUpperCase().replace(/ /g, '_')); // Translate the header
    });
  }

  private exportToExcel(data: any[][], headers: string[], fileName: string): Observable<any> {
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Products');
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(blob, `${fileName}.xlsx`);
    return of(true); // Indicate success
  }

  private exportToPdf(data: any[][], headers: string[], fileName: string): Observable<any> {
    const doc = new jsPDF();
    (doc as any).autoTable({
      head: [headers],
      body: data,
      startY: 20,
      theme: 'grid',
      styles: {
        fontSize: 8,
        cellPadding: 2,
      },
      headStyles: {
        fillColor: [200, 200, 200],
        textColor: [0, 0, 0],
        fontStyle: 'bold',
      },
      didDrawPage: (d: any) => {
        doc.text('Product List', d.settings.margin.left, 15);
      },
    });
    doc.save(`${fileName}.pdf`);
    return of(true);
  }

  private getDiscountLabelForExport(product: Product): string {
    if (product.priceDetails.discountDisabled) {
        return this.translate.instant('NO_DISCOUNT');
    }

    if (product.priceDetails.discountRangeActive) {
        return this.translate.instant('ACTIVE_DISCOUNT_RANGE');
    }

    if (product.priceDetails.discountType === 'FIXED') {
        return `${product.priceDetails.discountAmount} ${this.translate.instant('CURRENCY_SYMBOL')}`;
    } else if (product.priceDetails.discountType === 'PERCENT') {
        return `${product.priceDetails.discountAmount}%`;
    }
    return '';
  }
}