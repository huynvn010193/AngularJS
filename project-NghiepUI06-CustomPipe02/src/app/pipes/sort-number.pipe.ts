import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {
  transform(arrNumber: number[], sortValue?: number): any {
    arrNumber.sort((a,b) => {
      // if(a > b) return 1;
      // else if(a < b) return -1;
      // else return 0;
      return a - b;
    });
    if(sortValue === -1){
      arrNumber.reverse();
    }
    return [...arrNumber];
  }
}
