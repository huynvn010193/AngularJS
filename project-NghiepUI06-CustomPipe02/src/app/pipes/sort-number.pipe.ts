import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {
  transform(arrNumber: number[], sortValue?: number): any {
    arrNumber.sort((a,b) => {
      return a - b;
    });
    if(sortValue === -1){
      arrNumber.reverse();
    }
    return [...arrNumber];
  }
}
