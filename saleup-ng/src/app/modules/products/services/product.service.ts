import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse } from "src/app/shared/models/api-response";
import { PageRequest } from "src/app/shared/models/page-request.model";
import { PageResponse } from "src/app/shared/models/page-response.mdel";
import { environment } from "src/environments/environment";
import { Product, ProductStatisticsSummary } from "../models/product.model";
import { ProductDiscountRequest, ProductStockRequest } from "../models/product-request";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    
    baseUrl = environment.apiBaseUrl + '/product';

    constructor(private http: HttpClient) {}

    public getProductsPage(pageReq: PageRequest): Observable<ApiResponse<PageResponse<Product>>> {
        return this.http.get<any>(`${this.baseUrl}?page=${pageReq.page}&size=${pageReq.size}`)
    }

    public searchByKeyword(keyword: string, pr: PageRequest): Observable<ApiResponse<PageResponse<Product>>> {
        return this.http.get<any>(`${this.baseUrl}/filter?keyword=${keyword}&page=${pr.page}&size=${pr.size}`)
    }

    public createProduct(req: FormData): Observable<ApiResponse<Product>> {
        return this.http.post<any>(this.baseUrl, req);
    }

    public editProduct(req: FormData): Observable<ApiResponse<Product>> {
        return this.http.put<any>(this.baseUrl, req);
    }

    public getProductById(productId: number): Observable<ApiResponse<Product>> {
        return this.http.get<any>(`${this.baseUrl}/${productId}`);
    }

    public getProductByBarcode(barcode: string): Observable<ApiResponse<Product>> {
        return this.http.get<any>(`${this.baseUrl}/barcode/${barcode}`);
    }

    public createProductDiscount(req: ProductDiscountRequest): Observable<ApiResponse<Product>> {
        return this.http.post<any>(`${this.baseUrl}/discount`, req);
    }
    
    public getProductStatistics(productId: number, range: string): Observable<ApiResponse<ProductStatisticsSummary>> {
        return this.http.get<any>(`${this.baseUrl}/statistics/${productId}?range=${range}`);
    }

    public deleteProduct(productId: number): Observable<ApiResponse<any>> {
        return this.http.delete<any>(`${this.baseUrl}/${productId}`);
    }

    updateProductStock(req: ProductStockRequest) {
        return this.http.put<any>(`${this.baseUrl}/stock-update`, req);
      }

}