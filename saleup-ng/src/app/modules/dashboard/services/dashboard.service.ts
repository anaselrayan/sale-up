import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { ApiResponse } from "@shared/models/api-response";
import { Observable } from "rxjs";
import { DashboardSnapshotResponse } from "../models/dashboard-snapshot-response";
import { BestSellingProductResponse } from "../models/best-selling-product-response";
import { MonthSalesResponse } from "../models/month-sales-response";
import { Product } from "@module/products/models/product.model";
import { MonthSaleReturnsResponse } from "../models/month-returns-response";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    baseUrl = environment.apiBaseUrl + '/dashboard';

    constructor(private http: HttpClient) {}

    public getDashboardSnapshot(): Observable<ApiResponse<DashboardSnapshotResponse>> {
        return this.http.get<any>(`${this.baseUrl}/snapshot`);
    }

    public getTopSellingProducts(type: string): Observable<ApiResponse<BestSellingProductResponse[]>> {
        return this.http.get<any>(`${this.baseUrl}/top-selling?type=${type}`);
    }

    public getMonthlySales(year: number): Observable<ApiResponse<MonthSalesResponse[]>>{
        return this.http.get<any>(`${this.baseUrl}/monthly-sales?year=${year}`);
    }

    public getMonthlySaleReturns(year: number): Observable<ApiResponse<MonthSaleReturnsResponse[]>>{
        return this.http.get<any>(`${this.baseUrl}/monthly-sale-returns?year=${year}`);
    }

    public getLowStockProducts(): Observable<ApiResponse<Product[]>>{
        return this.http.get<any>(`${this.baseUrl}/low-stock`);
    }

}