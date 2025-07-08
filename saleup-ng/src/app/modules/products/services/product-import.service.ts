import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductImportColumnSpec } from "../models/product.model";
import { environment } from "@env/environment";
import { ApiResponse } from "@shared/models/api-response";

@Injectable({
    providedIn: 'root'
})
export class ProductImportService {

    baseUrl = environment.apiBaseUrl + "/product/import"

    constructor(private http: HttpClient) {}

    public getImportSpec(): Observable<ProductImportColumnSpec[]> {
        return this.http.get<any>(`${this.baseUrl}/spec`);
    }

    public importProducts(payload: FormData): Observable<ApiResponse<any>> {
        return this.http.post<any>(this.baseUrl, payload);
    }

}