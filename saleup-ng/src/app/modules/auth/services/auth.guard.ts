import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    router.navigate(['/auth/login']);
    return false;
  }

  const reqPerms = route.data['perms'];
  if (reqPerms && !authService.hasPermissions(reqPerms)) {
    router.navigate(['/auth/access'])
    return false;
  }

  return true;
};