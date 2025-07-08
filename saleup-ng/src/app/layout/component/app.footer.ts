import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StartUpService } from '@shared/services/startup.service';

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-footer',
    template: `<div class="layout-footer" *ngIf="appService.appDetails$ | async as appDetails">
        <div>
            <span class="text-lg">🛠</span>
            <a href="https://www.linkedin.com/in/anas-elrayan-5637b3191" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline"> anas_elrayan </a>
        </div>
        <div class="text-muted-color">All rights reserved © {{ currYear }} </div>
        <div>{{ appDetails.appFooter }}</div>
    </div>`
})
export class AppFooter {
    constructor(public appService: StartUpService) {}
    currYear = new Date().getFullYear();
}
