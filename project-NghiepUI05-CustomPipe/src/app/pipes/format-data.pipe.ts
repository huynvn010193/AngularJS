import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FormatData'
})
export class FormatDataPipe implements PipeTransform {

  transform(value: any, start: number, end: number): any {
    return value.substr(start,end)+'...';
  }
}
