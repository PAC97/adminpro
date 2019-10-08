import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: any,  keys: string, term: string): any {
    if(!term) return value; 
    return (value || []).filter((publi) => keys.split(',').some(key => publi.hasOwnProperty(key) && new RegExp(term, 'gi').test(publi[key])));
  }

}
