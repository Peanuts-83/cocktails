import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Subscription } from 'rxjs'
import { CocktailService } from 'src/app/shared/services/cocktail.service'
import { PanierService } from 'src/app/shared/services/panier.service'
import { Cocktail } from '../../shared/interfaces/cocktail.interface'

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit, OnDestroy {
  public cocktail!: Cocktail
  public subscription!: Subscription

  constructor(
    private panierService: PanierService,
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.cocktailService.cocktails$.subscribe(c => console.log(c))
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (this.subscription) {
        this.subscription.unsubscribe()
      }

      this.subscription = this.cocktailService
      .getCocktail(+paramMap.get('index')!)
      .subscribe((cocktail: Cocktail) => {
        this.cocktail = cocktail
      })
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  public addToPanier() {
    this.panierService.addPannier(this.cocktail.ingredients)
  }
}