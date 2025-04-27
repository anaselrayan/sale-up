import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { SaleReturnRequest } from "../models/sale-return-request";
import { Observable } from "rxjs";
import { ApiResponse } from "@shared/models/api-response";
import { SaleReturn } from "../models/sale-return.model";
import { PageRequest } from "@shared/models/page-request.model";
import { PageResponse } from "@shared/models/page-response.mdel";

@Injectable({
    providedIn: 'root'
})
export class SaleReturnService {

    baseUrl = environment.apiBaseUrl + '/sale-return'

    constructor(private http: HttpClient) {}

    createSaleReturn(req: SaleReturnRequest): Observable<ApiResponse<SaleReturn>> {
        return this.http.post<any>(this.baseUrl, req);
    }

    getSaleReturnsPage(pr: PageRequest): Observable<ApiResponse<PageResponse<SaleReturn>>> {
        return this.http.get<any>(`${this.baseUrl}?page=${pr.page}&size=${pr.size}`)
    }

    getSaleReturnById(id: number): Observable<ApiResponse<SaleReturn>> {
        return this.http.get<any>(`${this.baseUrl}/${id}`)
    }

    getSaleReturnsBySaleId(saleId: number, pr: PageRequest): Observable<ApiResponse<PageResponse<SaleReturn>>> {
        return this.http.get<any>(`${this.baseUrl}/sale/${saleId}?page=${pr.page}&size=${pr.size}`)
    }

}