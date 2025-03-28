import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { ApiResponse } from "@shared/models/api-response";
import { Observable } from "rxjs";
import { RoleRequest } from "../models/role-request";
import { PermissionGroup, Role } from "../models/role.model";

@Injectable({
    providedIn: 'root'
})
export class RoleService {

    baseUrl = environment.apiBaseUrl

    constructor(private http: HttpClient) {}

    public getAllRoles(): Observable<ApiResponse<Role[]>> {
        return this.http.get<any>(this.baseUrl + '/role');
    }

    public getPermissionGroups(): Observable<ApiResponse<PermissionGroup[]>> {
        return this.http.get<any>(this.baseUrl + '/permission');
    }

    public createRole(payload: RoleRequest): Observable<ApiResponse<Role>> {
        return this.http.post<any>(this.baseUrl + '/role', payload);
    }

}