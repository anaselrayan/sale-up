export interface ProductReportResponse {
  productBarcode: string;
  productName: string;
  soldQty: number;
  soldAmount: number;
  soldProfit: number;
  availableQty: number;
  availableAmount: number;
  availableProfit: number;
  returnedQty: number;
}

export interface SalesKpiResponse {
  totalSales: number;
  totalRevenue: number;
  totalDiscount: number;
  totalItemsSold: number;
  totalItemsReturned: number;
  totalReturnsValue: number;
  totalProfit: number;
  averageSaleValue: number;
}

export interface SaleSummaryResponse {
  id: number;
  barcode: string;
  createdAt: Date;
  customerName: string;
  numberOfItems: number;
  totalQuantity: number;
  returnedQuantity: number;
  subTotal: number;
  discount: number;
  grandTotal: number;
  profit: number;
  partiallyReturned: boolean;
  totallyReturned: boolean;
}

export class ReportFilterRequest {
  from!: Date;
  to!: Date;
}