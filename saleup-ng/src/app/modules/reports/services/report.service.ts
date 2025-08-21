import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { Observable } from "rxjs";
import { ProductReportResponse, ReportFilterRequest, SalesKpiResponse, SaleSummaryResponse } from "../models/report";
import { ApiResponse } from "@shared/models/api-response";

@Injectable({
    providedIn: 'root'
})
export class ReportService {

    baseUrl = environment.apiBaseUrl + '/report'

    constructor(private http: HttpClient) {}

    public getProductReport(): Observable<ApiResponse<ProductReportResponse[]>> {
        return this.http.get<any>(`${this.baseUrl}/products`)
    }

    public getSalesKpiReport(req: ReportFilterRequest): Observable<ApiResponse<SalesKpiResponse>> {
        return this.http.post<any>(`${this.baseUrl}/sales-kpi`, req)
    }

    public getSalesSummary(req: ReportFilterRequest): Observable<ApiResponse<SaleSummaryResponse[]>> {
        return this.http.post<any>(`${this.baseUrl}/sales-summary`, req)
    }

}