import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StartUpService } from '@shared/services/startup.service';

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-footer',
    template: `<div class="layout-footer" *ngIf="appService.appDetails$ | async as appDetails">
        {{ appDetails.appFooter }}
        <a href="https://primeng.org" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">AnasElrayan</a>
    </div>`
})
export class AppFooter {
    constructor(public appService: StartUpService) {}
}
