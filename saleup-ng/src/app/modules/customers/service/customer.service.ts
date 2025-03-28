import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiResponse } from "@shared/models/api-response";
import { PageRequest } from "@shared/models/page-request.model";
import { PageResponse } from "@shared/models/page-response.mdel";
import { Observable } from "rxjs";
import { Customer } from "../models/customer.model";
import { environment } from "@env/environment";
import { CustomerRequest } from "../models/customer.request";

@Injectable({providedIn: 'root'})
export class CustomerService {

    baseUrl = environment.apiBaseUrl + '/customer';
    constructor(private http: HttpClient) {}

    public getCustomersPage(pr: PageRequest): Observable<ApiResponse<PageResponse<Customer>>> {
        return this.http.get<any>(`${this.baseUrl}?page=${pr.page}&size=${pr.size}`);
    }

    public createCustomer(req: CustomerRequest): Observable<ApiResponse<Customer>> {
        return this.http.post<any>(this.baseUrl, req);
    }

    public filterCustomersByPhone(keyword: string): Observable<ApiResponse<Customer[]>> {
        return this.http.get<any>(`${this.baseUrl}/filter?key=${keyword}`);
    }

}