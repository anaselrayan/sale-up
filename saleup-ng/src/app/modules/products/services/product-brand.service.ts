import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductBrand } from "../models/product.model";
import { environment } from "@env/environment";
import { ApiResponse } from "@shared/models/api-response";
import { PageRequest } from "@shared/models/page-request.model";
import { PageResponse } from "@shared/models/page-response.mdel";

@Injectable({
    providedIn: 'root'
})
export class ProductBrandService {

    baseUrl = environment.apiBaseUrl;
    
    constructor(private http: HttpClient) {}

    public getAllBrands(): Observable<ApiResponse<ProductBrand[]>> {
        return this.http.get<any>(`${this.baseUrl}/product-brand/all`);
    }

    public getBrandsPage(pr: PageRequest): Observable<ApiResponse<PageResponse<ProductBrand>>> {
        return this.http.get<any>(`${this.baseUrl}/product-brand?page=${pr.page}&size=${pr.size}`);
    }

    public createBrand(req: FormData): Observable<ApiResponse<ProductBrand>> {
        return this.http.post<any>(`${this.baseUrl}/product-brand`, req);
    }

    public updateBrand(req: FormData): Observable<ApiResponse<ProductBrand>> {
        return this.http.put<any>(`${this.baseUrl}/product-brand`, req);
    }

}