import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

    transform(items: any[], searchText: string): any[] {
        if(!items) { return []; }
        if(!searchText) { return items; }
        console.log(typeof searchText)
        searchText = searchText;
        return items.filter(it => {
            return it.Cin.toString().includes(searchText);
        });
    }
}
