import { HttpInterceptorFn } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { inject } from '@angular/core';
import { tap } from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

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
        if (error.status === 409) {
          authService.signOut();
        }
      }
    )
  );
};