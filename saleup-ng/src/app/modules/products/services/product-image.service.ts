import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse } from "src/app/shared/models/api-response";
import { environment } from "src/environments/environment";
import { ProductImage } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductImageService {

    baseUrl = environment.apiBaseUrl + '/product-image';

    constructor(private http: HttpClient) {}

    public deleteProductImage(imageId: number): Observable<ApiResponse<any>> {
        return this.http.delete<any>(`${this.baseUrl}/${imageId}`);
    }

    public setPrimaryImage(imageId: number): Observable<ApiResponse<ProductImage>> {
        return this.http.put<any>(`${this.baseUrl}/primary/${imageId}`, {});
    }

}