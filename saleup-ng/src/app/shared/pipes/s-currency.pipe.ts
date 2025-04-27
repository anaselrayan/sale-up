import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sCurrency',
  standalone: true
})
export class SCurrencyPipe implements PipeTransform {

  transform(value: number | undefined | null, ...args: string[]): unknown {
    if (value) 
      return this.getSymbol() + ' ' + value.toFixed(2);
    else return this.getSymbol() + ' ' + '0.0';
  }

  private getSymbol() {
    const appState = sessionStorage.getItem('app.state');
    if (appState) {
      const c = JSON.parse(appState).defaultCurrency;
      switch(c) {
        case 'USD': return '$';
        case 'EUR': return '€';
        case 'EGP': return 'E£';
        case 'SAR': return 'ر.س';
        default: return '';
      }
    }
    return '';
  }

}
