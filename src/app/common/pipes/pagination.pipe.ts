import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(value: any[], args: any): any[] {
    // console.log(args);
    // console.log(value);
    if (args && args.start !== undefined && args.end !== undefined) {
      return value.filter((val, index) => {
        return index >= args.start && index <= args.end;
      });
    }
    return value;
  }

}
