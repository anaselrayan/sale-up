import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "@env/environment";
import { ApiResponse } from "@shared/models/api-response";
import { AuthResponse } from "@module/auth/models/auth-response";
import { LoginRequest } from "@module/auth/models/login-request";
import { Observable } from "rxjs";
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: "root"
})
export class AuthService {

  baseUrl = environment.apiBaseUrl + "/auth"

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  getToken() {
    return sessionStorage.getItem('token');
  }

  signOut() {
    sessionStorage.removeItem('token');
    this.redirectToLogin();
  }

  signIn(req: LoginRequest): Observable<ApiResponse<AuthResponse>> {
    return this.http.post<any>(`${this.baseUrl}/login`, req);
  }

  handleLoginSuccess(res: AuthResponse) {
    sessionStorage.setItem('token', res.token);
    this.router.navigate(['/'])
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }

  hasPermissions(perms: string[]):  boolean {
    const token = this.getToken();
    if (!token)
      return false;

    try {
      const decodedToken: any = jwtDecode(token);
      const userAuthorities: string[] = decodedToken?.authorities?.split(',') || [];
      return perms.every(p => userAuthorities.includes(p))
    } catch (error) {
      return false;
    }
  }

  redirectToLogin() {
    this.router.navigate(['/auth/login'])
  }

}
