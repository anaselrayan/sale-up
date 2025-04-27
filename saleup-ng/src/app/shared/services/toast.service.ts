import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { MessageService } from "primeng/api";

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(private ms: MessageService, private tr: TranslateService) {}

    showError(msg: string) {
        this.ms.add({
            severity: 'error',
            summary: this.tr.instant('SOMETHING_WRONG'),
            detail: msg,
            closable: true,
            life: 3000
        })
    }

    showSuccess(msg: string) {
        this.ms.add({
            severity: 'success',
            summary: this.tr.instant('SUCCESS_OPERATION'),
            detail: msg,
            closable: true,
            life: 3000
        })
    }

    showInfo(msg: string) {
        this.ms.add({
            severity: 'info',
            summary: this.tr.instant('INFO'),
            detail: msg,
            closable: true,
            life: 3000
        })
    }

    showWarn(msg: string) {
        this.ms.add({
            severity: 'warn',
            summary: this.tr.instant('WARNING'),
            detail: msg,
            closable: true,
            life: 3000
        })
    }

}