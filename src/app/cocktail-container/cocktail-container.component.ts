import { CocktailService } from '../shared/services/cocktail.service'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Cocktail } from '../shared/interfaces/cocktail.interface'
import { initialCocktails } from '../shared/init/initialCocktails'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss']
})
export class CocktailContainerComponent {
  public cocktails$: Observable<Cocktail[]> = this.cocktailService.cocktails$

  constructor(private cocktailService: CocktailService) { }


}
