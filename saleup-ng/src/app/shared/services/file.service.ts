import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { ApiResponse } from "@shared/models/api-response";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FileService {

    baseUrl = environment.apiBaseUrl + '/resource'

    constructor(private http: HttpClient) {}

    public uploadStaticFile(file: File): Observable<ApiResponse<UploadResponse>> {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post<any>(this.baseUrl, formData);
    }

}

interface UploadResponse {
    success: boolean;
    fileName: string;
    filePath: string;
}