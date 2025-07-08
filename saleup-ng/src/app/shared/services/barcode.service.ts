import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { PrintBarcodeRequest } from "@module/stock/models/print";
import { ApiResponse } from "@shared/models/api-response";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BarcodeService {

    baseUrl = environment.apiBaseUrl + '/barcode';

    constructor(private http: HttpClient) {}

    public getBarcodeFormats(): Observable<string[]> {
        return this.http.get<string[]>(`${this.baseUrl}/format`)
    }

    public printBarcode(req: PrintBarcodeRequest): Observable<ApiResponse<any>> {
        return this.http.post<any>(`${this.baseUrl}/print`, req);
    }
    
}