import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {

  transform(value: string, size: 'short' | 'medium' | 'long' = 'medium'): string {
    if (!value) {
      return '';
    }

    let length: number;

    switch (size) {
      case 'short':
        length = 50;
        break;
      case 'medium':
        length = 100;
        break;
      case 'long':
        length = 150;
        break;
      default:
        length = 100;
    }

    return value.length <= length ? value : value.substring(0, length) + '...';
  }

}
