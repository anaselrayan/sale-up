import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFt'
})
export class DateFtPipe implements PipeTransform {

  transform(value: Date, size: 'short' | 'medium' | 'long' = 'medium'): unknown {
    const lang = this.getLang();
    const locales = lang === 'ar' ? ['ar', 'ar-u-nu-latn'] : ['en'];
  
    let options: Intl.DateTimeFormatOptions = {};
  
    switch (size) {
      case 'short':
        options = {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        };
        break;
  
      case 'medium':
        options = {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        };
        break;
  
      case 'long':
        options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        };
        break;
    }
  
    return new Intl.DateTimeFormat(locales, options).format(new Date(value));
  }
  

  private getLang() {
    const appState = sessionStorage.getItem('app.state');
    if (appState) return JSON.parse(appState).defaultLanguage || 'en';
  }

}
