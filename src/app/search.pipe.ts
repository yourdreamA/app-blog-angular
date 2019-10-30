import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (args[0] === '') {
      return value;
    }
    
    //value.filter(e => e.email.includes(args[0]));

    return value.filter(e => JSON.stringify(e).includes(args[0]));
  }

}
