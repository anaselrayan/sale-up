import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { Role } from "@module/roles/models/role.model";
import { ApiResponse } from "@shared/models/api-response";
import { PageRequest } from "@shared/models/page-request.model";
import { PageResponse } from "@shared/models/page-response.mdel";
import { Observable } from "rxjs";
import { UserRequest } from "../models/user-request";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    baseUrl = environment.apiBaseUrl + '/user';

    constructor(private http: HttpClient) {}

    public getUsersPage(pr: PageRequest): Observable<ApiResponse<PageResponse<User>>> {
        return this.http.get<any>(`${this.baseUrl}?page=${pr.page}&size=${pr.size}`);
    }

    public createUser(payload: FormData): Observable<ApiResponse<User>> {
        return this.http.post<any>(this.baseUrl, payload);
    }

}