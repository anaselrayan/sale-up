import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { PrintDevice } from "@module/stock/models/print-device";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PrintService {

    baseUrl = environment.apiBaseUrl + '/printer';

    constructor(private http: HttpClient) {}

    public getAllPrinters(): Observable<PrintDevice[]> {
        return this.http.get<any>(`${this.baseUrl}`);
    }

    

}