import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { SaleRequest } from "../models/sale-request";
import { HttpClient } from "@angular/common/http";
import { PageRequest } from "@shared/models/page-request.model";
import { Observable } from "rxjs";
import { ApiResponse } from "@shared/models/api-response";
import { PageResponse } from "@shared/models/page-response.mdel";
import { Sale } from "../models/sale.model";

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

    public getSaleReceipt(saleId: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/receipt/${saleId}`, { responseType: 'blob' });
    }

    public deleteSale(saleId: number): Observable<ApiResponse<any>> {
        return this.http.delete<any>(`${this.baseUrl}/${saleId}`);
    }

    public deleteAll(sales: number[]): Observable<ApiResponse<any>> {
        return this.http.post<any>(`${this.baseUrl}/multi-delete`, {IDs: sales});
    }

    public previewSaleReceipt(sale: Sale) {
        this.getSaleReceipt(sale.saleId)
            .subscribe(res => {
            const blob = new Blob([res], { type: 'application/pdf' });
            const pdfUrl = URL.createObjectURL(blob);
            const printWindow = window.open(pdfUrl, '_blank');
            if (printWindow) {
                printWindow.onload = () => {
                printWindow.print();
                };
            }
        })
    }

}