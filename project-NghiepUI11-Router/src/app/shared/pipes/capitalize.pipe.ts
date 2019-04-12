import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    var arrStr = value.split(' ');
    var result = '';
    arrStr.forEach(str => {
      result += str.charAt(0).toUpperCase()+str.substr(1) + ' ';
    });
    return result;
  }
}
