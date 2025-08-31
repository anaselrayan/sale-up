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

    baseUrl = environment.apiBaseUrl + '/product-brand';
    
    constructor(private http: HttpClient) {}

    public getAllBrands(): Observable<ApiResponse<ProductBrand[]>> {
        return this.http.get<any>(`${this.baseUrl}/all`);
    }

    public getBrandsPage(pr: PageRequest): Observable<ApiResponse<PageResponse<ProductBrand>>> {
        return this.http.get<any>(`${this.baseUrl}?page=${pr.page}&size=${pr.size}`);
    }

    public createBrand(req: FormData): Observable<ApiResponse<ProductBrand>> {
        return this.http.post<any>(`${this.baseUrl}`, req);
    }

    public updateBrand(req: FormData): Observable<ApiResponse<ProductBrand>> {
        return this.http.put<any>(`${this.baseUrl}`, req);
    }

    public deleteBrand(brandId: number): Observable<ApiResponse<any>> {
        return this.http.delete<any>(`${this.baseUrl}/${brandId}`);
    }

    public deleteAll(brands: number[]): Observable<ApiResponse<any>> {
        return this.http.delete<any>(`${this.baseUrl}/multi-delete`, { body: brands });
    }

}