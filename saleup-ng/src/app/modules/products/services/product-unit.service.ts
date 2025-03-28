import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductUnitOfMeasure } from "../models/product.model";
import { ApiResponse } from "@shared/models/api-response";
import { environment } from "@env/environment";
import { ProductUnitRequest } from "../models/product-request";


@Injectable({
    providedIn: 'root'
})
export class ProductUnitService {

    baseUrl = environment.apiBaseUrl + '/product-unit';
    
    constructor(private http: HttpClient) {}

    public getAllUnits(): Observable<ApiResponse<ProductUnitOfMeasure[]>> {
        return this.http.get<any>(this.baseUrl);
    }

    public createProductUnit(req: ProductUnitRequest): Observable<ApiResponse<ProductUnitOfMeasure>> {
        return this.http.post<any>(this.baseUrl, req)
    }

    public updateProductUnit(req: ProductUnitRequest): Observable<ApiResponse<ProductUnitOfMeasure>> {
        return this.http.put<any>(this.baseUrl, req)
    }

}