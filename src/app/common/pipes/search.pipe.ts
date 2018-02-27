import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(values: any[], searchText?: string): any[] {

    if (!values) {
      return [];
    }
    if (!searchText) {
      return values;
    }
    searchText = searchText.toLowerCase();
    return values.filter(value => {
      console.log(value);
      const jsonStr = JSON.stringify(value).toLowerCase();
      return jsonStr.indexOf(searchText) !== -1;
    });
  }

}
