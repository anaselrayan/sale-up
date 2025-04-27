import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@module/auth/services/auth.service';

interface AppDetails {
    appName: string;
    appDescription: string;
    appIcon: string;
    appLogo: string;
    appFooter: string;
    defaultLanguage: string;
    defaultCurrency: string;
    languageOptions: [{
        id: number;
        name: string;
        value: string;
    }];
    currencyOptions: [{
        id: number;
        name: string;
        value: string;
    }];
}

@Injectable({
    providedIn: 'root',
})
export class StartUpService {
    baseUrl = environment.apiBaseUrl + '/app';

    private appDetailsSubject: BehaviorSubject<AppDetails | null> = new BehaviorSubject<AppDetails | null>(null);
    appDetails$: Observable<AppDetails | null> = this.appDetailsSubject.asObservable();

    constructor(
        private authService: AuthService,
        private http: HttpClient,
        private translate: TranslateService
    ) {}

    fetchAppDetails(): Observable<AppDetails> {
        return this.http.get<AppDetails>(this.baseUrl + '/public');
    }

    startUp(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.fetchAppDetails().pipe(
                catchError((error) => {
                    console.error('Error fetching app details:', error);
                    reject('App details fetching failed');
                    return [];
                })
            ).subscribe({
                next: (details) => {
                    // Success
                    this.doWork(details);
                    resolve();
                },
                error: (err) => {
                    reject(err);
                }
            });
        });
    }
    
    doWork(details: AppDetails) {
        this.storeAppDetails(details);
        this.reflectAppChanges(details);
    }

    storeAppDetails(details: AppDetails): void {
        this.appDetailsSubject.next(details);
    }

    reflectAppChanges(details: AppDetails) {
        sessionStorage.setItem('app.state', JSON.stringify(details))
        window.document.title = details.appDescription;
        this.setFavicon(details);
        this.translate.addLangs(details.languageOptions.map(op => op.value));
        this.translate.setDefaultLang(details.defaultLanguage);
        this.handleLanaguageDirection(details.defaultLanguage);
        this.translate.use(details.defaultLanguage);
    }

    setFavicon(details: AppDetails) {
        const head = document.querySelector('head');
        let favicon: HTMLLinkElement | null = document.querySelector('link[rel*="icon"]');

        if (favicon) {
            favicon.href = environment.apiBaseUrl + '/resource/' + details.appIcon;
        } else {
            favicon = document.createElement('link');
            favicon.rel = 'icon';
            favicon.type = 'image/x-icon';
            favicon.href = environment.apiBaseUrl + '/resource/' + details.appIcon;
            head?.appendChild(favicon);
    }
    }

    handleLanaguageDirection(lang: string) {
        const dir = document.documentElement.getAttribute('dir');
        if (lang === 'ar' && dir != 'rtl') {
            document.documentElement.setAttribute('dir', 'rtl');
        }
        else {
            if (dir != 'ltr') document.documentElement.setAttribute('dir', 'ltr');
        }
    }
    
}