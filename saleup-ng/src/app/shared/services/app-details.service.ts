import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';

interface AppDetails {
    appName: string;
    appDescription: string;
    appIcon: string;
    appLogo: string;
    appFooter: string;
}

@Injectable({
    providedIn: 'root',
})
export class AppDetailsService {
    baseUrl = environment.apiBaseUrl + '/app';

    private appDetailsSubject: BehaviorSubject<AppDetails | null> = new BehaviorSubject<AppDetails | null>(null);
    appDetails$: Observable<AppDetails | null> = this.appDetailsSubject.asObservable();

    constructor(
        private http: HttpClient,
        private translate: TranslateService
    ) 
    {
        this.translate.addLangs(['ar', 'en']);
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }

    fetchAppDetails(): Observable<AppDetails> {
        return this.http.get<AppDetails>(this.baseUrl + '/public');
    }

    storeAppDetails(details: AppDetails): void {
        window.document.title = details.appDescription;
        this.appDetailsSubject.next(details);
    }

}