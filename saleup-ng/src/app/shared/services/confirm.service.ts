import { Injectable } from "@angular/core";
import { ConfirmationService } from "primeng/api";

type Accept = () => void;
type Reject = () => void;

@Injectable({
    providedIn: 'root'
})
export class ConfirmService {

    constructor(private confirmation: ConfirmationService) {}

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
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => accept()
            });
    }

}