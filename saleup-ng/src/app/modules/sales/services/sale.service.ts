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
    basUrl = environment.apiBaseUrl + '/sale';

    constructor(private http: HttpClient) {}

    public createSale(req: SaleRequest): Observable<ApiResponse<Sale>> {
        return this.http.post<any>(this.basUrl, req);
    }

    public getSalesPage(pr: PageRequest): Observable<ApiResponse<PageResponse<Sale>>> {
        return this.http.get<any>(`${this.basUrl}?page=${pr.page}&size=${pr.size}`)
    }

    public getSaleById(saleId: number): Observable<ApiResponse<Sale>> {
        return this.http.get<any>(`${this.basUrl}/${saleId}`)
    }

    public getSaleReceipt(saleId: number): Observable<any> {
        return this.http.get(`${this.basUrl}/receipt/${saleId}`, { responseType: 'blob' });
    }

    public deleteSale(saleId: number): Observable<ApiResponse<any>> {
        return this.http.delete<any>(`${this.basUrl}/${saleId}`);
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