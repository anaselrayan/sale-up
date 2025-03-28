import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { ApiResponse } from "@shared/models/api-response";
import { Observable } from "rxjs";
import { DashboardSnapshotResponse } from "../models/dashboard-snapshot-response";
import { BestSellingProductResponse } from "../models/best-selling-product-response";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    baseUrl = environment.apiBaseUrl + '/dashboard';

    constructor(private http: HttpClient) {}

    public getDashboardSnapshot(): Observable<ApiResponse<DashboardSnapshotResponse>> {
        return this.http.get<any>(`${this.baseUrl}/snapshot`);
    }

    public getTopSellingProducts(): Observable<ApiResponse<BestSellingProductResponse[]>> {
        return this.http.get<any>(`${this.baseUrl}/top-selling`);
    }


}