import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule } from '@angular/router';
import { AuthService } from '@module/auth/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { LoadingComponent } from '@shared/components/loading/loading.component';
import { ToastService } from '@shared/services/toast.service';
import { ConfirmDialog } from "primeng/confirmdialog";
import { Toast } from 'primeng/toast';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, CommonModule, ConfirmDialog, LoadingComponent, Toast],
    template: `
    <app-loading *ngIf="isAppLoading || isNavigating"></app-loading>
    <router-outlet></router-outlet>
    <p-toast></p-toast>
    <p-confirmdialog [style]="{ width: '450px' }" />
    `
})
export class AppComponent {

    isAppLoading = true;
    isNavigating = false;

    constructor(
        private router: Router,
        private authService: AuthService,
        private toast: ToastService,
        private translate: TranslateService,
    ) {
        this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
            this.isNavigating = true;
        } else if (
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError
        ) {
            this.isNavigating = false;
        }
        });
    }

    ngOnInit() {
        setTimeout(() => {
            this.subscribeForForbiddenAccess();
            this.isAppLoading = false;
            if (!this.authService.getToken() || this.authService.noPermissions())
                this.authService.signOut();
        }, 1500);
    }

    subscribeForForbiddenAccess() {
        this.authService.forbiddenSub.subscribe(url => {
            this.toast.showWarn(this.translate.instant('BLOCK_ACCESS_MSG'));
            this.router.navigate(['/']).then(() => {document.location.reload();});
        })
    }

}
