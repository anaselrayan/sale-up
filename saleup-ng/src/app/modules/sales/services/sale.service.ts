import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { SaleRequest } from "../models/sale-request";
import { HttpClient } from "@angular/common/http";
import { PageRequest } from "@shared/models/page-request.model";
import { Observable } from "rxjs";
import { ApiResponse } from "@shared/models/api-response";
import { PageResponse } from "@shared/models/page-response.mdel";
import { Sale } from "../models/sale.model";
import { SaleReceiptOptions } from "../models/sale-receipt";

@Injectable({
    providedIn: 'root'
})
export class SaleService {
    baseUrl = environment.apiBaseUrl + '/sale';

    constructor(private http: HttpClient) {}

    public createSale(req: SaleRequest): Observable<ApiResponse<Sale>> {
        return this.http.post<any>(this.baseUrl, req);
    }

    public updateSale(req: SaleRequest): Observable<ApiResponse<Sale>> {
        return this.http.put<any>(this.baseUrl, req);
    }

    public getSalesPage(pr: PageRequest): Observable<ApiResponse<PageResponse<Sale>>> {
        return this.http.get<any>(`${this.baseUrl}?page=${pr.page}&size=${pr.size}`)
    }

    public getSaleById(saleId: number): Observable<ApiResponse<Sale>> {
        return this.http.get<any>(`${this.baseUrl}/${saleId}`)
    }

    public getSaleIdByBarcode(barcode: string): Observable<ApiResponse<number>> {
        return this.http.get<any>(`${this.baseUrl}/barcode/${barcode}`)
    }

    public getSaleReceipt(saleId: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${saleId}/receipt`, { responseType: 'blob' });
    }

    public deleteSale(saleId: number): Observable<ApiResponse<any>> {
        return this.http.delete<any>(`${this.baseUrl}/${saleId}`);
    }

    public deleteAll(sales: number[]): Observable<ApiResponse<any>> {
        return this.http.delete<any>(`${this.baseUrl}/multi-delete`, { body: sales });
    }

    public previewSaleReceipt(sale: Sale) {
        this.getSaleReceipt(sale.saleId)
            .subscribe(blob => {
            const url = window.URL.createObjectURL(blob);
            const receiptWin = window.open(url);
            receiptWin?.print();
        })
    }

    public getReceiptOptions(): Observable<SaleReceiptOptions> {
        return this.http.get<any>(`${this.baseUrl}/receipt-options`)
    }

}