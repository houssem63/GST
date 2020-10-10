import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ReportNameFilter'
})
export class ReportNameFilter implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.toLowerCase().includes(searchText);
        });
    }
}
