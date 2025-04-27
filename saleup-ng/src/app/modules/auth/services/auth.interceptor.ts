import { HttpInterceptorFn } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { inject } from '@angular/core';
import { tap } from "rxjs";
import { Router } from "@angular/router";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const authToken = authService.getToken();

  const authReq = authToken
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      })
    : req;

  return next(authReq).pipe(
    tap(
      event => {
        // No need to check for HttpResponse explicitly, since errors are caught separately
      },
      error => {
        if (error.status === 401) {
          authService.signOut();
        }
        else if (error.status === 403) {
          router.navigate(['/auth/access'])
        }
      }
    )
  );
};