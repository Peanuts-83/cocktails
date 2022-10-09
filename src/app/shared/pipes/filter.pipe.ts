import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface'
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cocktails: Cocktail[], search: string): Cocktail[] | null {
    return cocktails.filter((cocktail: Cocktail) => cocktail.name.toLowerCase().includes(search.toLowerCase()))
  }

}
