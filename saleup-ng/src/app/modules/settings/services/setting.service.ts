import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { ApiResponse } from "@shared/models/api-response";
import { Observable } from "rxjs";
import { Setting } from "../models/setting.model";
import { SettingRequest } from "../models/setting-request";

@Injectable({
    providedIn: 'root'
})
export class SettingService {

    baseUrl = environment.apiBaseUrl + '/setting';

    constructor(private http: HttpClient) {}

    public getSettingsByCategory(category: string): Observable<ApiResponse<Setting[]>> {
        return this.http.get<any>(`${this.baseUrl}/category?type=${category}`);
    }

    public updateSettings(reqs: SettingRequest[]): Observable<ApiResponse<any>> {
        return this.http.put<any>(this.baseUrl, reqs);
    }

}