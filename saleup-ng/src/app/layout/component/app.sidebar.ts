import { Component, ElementRef, OnInit } from '@angular/core';
import { AppMenu } from './app.menu';
import { Button } from "primeng/button";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ConfirmService } from '@shared/services/confirm.service';
import { AuthService } from '@module/auth/services/auth.service';
import { UserUtils } from 'src/app/utils/user.utils';
import { Avatar } from 'primeng/avatar';
import { Tooltip } from 'primeng/tooltip';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [AppMenu, Button, TranslateModule, Avatar, Tooltip],
    template: ` <div class="layout-sidebar">
        <app-menu></app-menu>
        <div class="flex items-center justify-center gap-2 w-full">
            <p-avatar [pTooltip]="username" tooltipPosition="top" [image]="getUserImg()" class="mr-2" shape="circle" />
            <p-button icon="pi pi-sign-out" [label]="'SIGN_OUT' | translate" (onClick)="signOut()" variant="text" severity="danger" />
        </div>
    </div>
    `,
    styles: [
        `
        .layout-sidebar {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        `
    ]
})
export class AppSidebar implements OnInit {
    username: string | undefined = '';

    constructor(
        public el: ElementRef,
        private confirm: ConfirmService,
        private translate: TranslateService,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.username = this.authService.getUsername();
    }

    signOut() {
        this.confirm.dialogAlert(this.translate.instant('SIGN_OUNT_CONFIRM_MSG'), ()=> {
            this.authService.signOut();
        })
    }

    getUserImg() {
        return UserUtils.getUserImage(this.username)
    }

}
