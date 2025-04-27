import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ConfirmationService } from "primeng/api";

type Accept = () => void;
type Reject = () => void;

@Injectable({
    providedIn: 'root'
})
export class ConfirmService {

    constructor(
        private confirmation: ConfirmationService,
        private translate: TranslateService
    ) {}

    alert(event: Event, accept: Accept) {
        this.confirmation.confirm({
            target: event.target as EventTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true
            },
            acceptButtonProps: {
                label: 'Yes'
            },
            accept: () => accept()
        });
    }

    dialogAlert(msg: string, accept: Accept) {
        this.confirmation.confirm({
            message: msg,
            header: this.translate.instant('PLEASE_CONFIRM'),
            icon: 'pi pi-exclamation-triangle',
            rejectButtonProps: {
                label: this.translate.instant('CANCEL'),
                severity: 'secondary',
                outlined: true
            },
            acceptButtonProps: {
                label: this.translate.instant('YES')
            },
            accept: () => accept()
            });
    }

}