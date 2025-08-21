import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '@env/environment';
import { AuthService } from '@module/auth/services/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { StartUpService } from '@shared/services/startup.service';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-welcome-page',
  imports: [CommonModule, Card, TranslateModule],
  template: `
    <p-card class="w-full max-w-3xl m-auto mt-6 shadow-2 border-round-2xl">
      <div  *ngIf="appService.appDetails$ | async as appDetails">
        <div class="flex gap-2 items-center mb-8">
          <img *ngIf="appDetails.appLogo" width="100px" [src]="getAppLogoSrc() + '/' + appDetails.appLogo" />
          <div>
            <div class="text-2xl mb-2 font-semibold">
              {{ appDetails.appName }}
            </div>
            <div class="text-muted-color">
              {{ appDetails.appDescription }}
            </div>
          </div>
        </div>
        <div class="text-xl">
          {{ 'WELCOME' | translate }}, <span class="text-primary">{{ this.authService.getUsername()}}</span> !
        </div>
        <div class="flex justify-center">
          <img src="assets/images/welcome.png" />
        </div>
      </div>
    </p-card>
  `
})
export class WelcomePageComponent {

  constructor(
    public appService: StartUpService,
    public authService: AuthService,
  ) { }

  getAppLogoSrc() {
    return environment.apiBaseUrl + '/resource';
  }

}
