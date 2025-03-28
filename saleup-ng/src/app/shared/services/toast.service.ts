import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(private ms: MessageService) {}

    showError(msg: string) {
        this.ms.add({
            severity: 'error',
            summary: 'Something went wrong',
            detail: msg,
            closable: true,
            life: 3000
        })
    }

    showSuccess(msg: string) {
        this.ms.add({
            severity: 'success',
            summary: 'Success operations',
            detail: msg,
            closable: true,
            life: 3000
        })
    }

    showInfo(msg: string) {
        this.ms.add({
            severity: 'info',
            summary: 'Info.',
            detail: msg,
            closable: true,
            life: 3000
        })
    }

    showWarn(msg: string) {
        this.ms.add({
            severity: 'warn',
            summary: 'Warning',
            detail: msg,
            closable: true,
            life: 3000
        })
    }

}