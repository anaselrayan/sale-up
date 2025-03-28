import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductCategory } from "../models/product.model";
import { environment } from "@env/environment";
import { ApiResponse } from "@shared/models/api-response";
import { PageRequest } from "@shared/models/page-request.model";
import { PageResponse } from "@shared/models/page-response.mdel";

@Injectable({
    providedIn: 'root'
})
export class ProductCategoryService {

    baseUrl = environment.apiBaseUrl;
    
    constructor(private http: HttpClient) {}

    public getAllCategories(): Observable<ApiResponse<ProductCategory[]>> {
        return this.http.get<any>(`${this.baseUrl}/product-category/all`);
    }

    public getCategoriesPage(pr: PageRequest): Observable<ApiResponse<PageResponse<ProductCategory>>> {
        return this.http.get<any>(`${this.baseUrl}/product-category?page=${pr.page}&size=${pr.size}`);
    }

    public createProductCategory(req: FormData): Observable<ApiResponse<ProductCategory>> {
        return this.http.post<any>(`${this.baseUrl}/product-category`, req);
    }

    public updateProductCategory(req: FormData): Observable<ApiResponse<ProductCategory>> {
        return this.http.put<any>(`${this.baseUrl}/product-category`, req);
    }

    public deleteCategory(catId: number): Observable<ApiResponse<any>> {
        return this.http.delete<any>(`${this.baseUrl}/product-category/${catId}`);
    }

}