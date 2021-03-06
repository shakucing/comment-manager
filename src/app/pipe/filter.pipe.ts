import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    
    searchText = searchText.toLowerCase();
        return items.filter( it => {

            if(it.name.toLowerCase().includes(searchText)){
                return it.name.toLowerCase().includes(searchText);
            }
            if(it.email.toLowerCase().includes(searchText)){
                return it.email.toLowerCase().includes(searchText);
            }
            if(it.body.toLowerCase().includes(searchText)){
                return it.body.toLowerCase().includes(searchText);
            }
        });
   } 
}