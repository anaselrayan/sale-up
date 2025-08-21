// export-util.ts

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { DateUtils } from './date.utils';

export interface ExportColumn {
  field?: string;
  header: string;
  valueGetter?: (row: any) => any;  // for calculated fields
}


export class ExportUtils {

  static exportDataToExcel<T>(data: T[], columns: ExportColumn[], filePrefix: string): void {
    if (!data || data.length === 0 || !columns || columns.length === 0) return;

    const exportData = data.map(row => {
      const mappedRow: any = {};
      columns.forEach(col => {
        if (col.valueGetter) {
          mappedRow[col.header] = col.valueGetter(row);
        } else if (col.field) {
          mappedRow[col.header] = this.resolveFieldData(row, col.field);
        }
      });
      return mappedRow;
    });

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportData);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data']
    };

    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array'
    });

    const blob = new Blob([excelBuffer], {
      type: 'application/octet-stream'
    });

    saveAs(blob, `${filePrefix}_${DateUtils.getStringTimestamp()}.xlsx`);
  }

  private static resolveFieldData(data: any, field: string): any {
    if (!data || !field) return null;
    if (!field.includes('.')) return data[field];
    return field.split('.').reduce((prev, curr) => (prev ? prev[curr] : null), data);
  }

}
