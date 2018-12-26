import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    // value.replace(/\w\S*/g, (word) => {
    //   console.log(word);
    //   return word.toUpperCase();
    // });
    var arrStr = value.split(' ');
    var result = '';
    arrStr.forEach(str => {
      result += str.charAt(0).toUpperCase()+str.substr(1) + ' ';
    });
    return result;
  }
}
