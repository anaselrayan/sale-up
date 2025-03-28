import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sCurrency',
  standalone: true
})
export class SCurrencyPipe implements PipeTransform {

  transform(value: number | undefined | null, ...args: string[]): unknown {
    if (value)
      return '$' + value.toFixed(2);
    else return '$$';
  }

}
