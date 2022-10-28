import { Injectable, OnInit, OnDestroy } from '@angular/core'
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs'
import { Ingredient } from '../interfaces/ingredient.interface'

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  public ingredients$: BehaviorSubject<Ingredient[] | null> = new BehaviorSubject<Ingredient[] | null>(sessionStorage.getItem('cocktailsPanier') ? JSON.parse(sessionStorage.getItem('cocktailsPanier') || '') : null)
  public ingredientNumber$: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  addPannier (ingredients: Ingredient[]): void {
    const currentValue = this.ingredients$.value
    if (currentValue) {
      const obj = [...currentValue, ... ingredients].reduce(
        (acc: {[x: string]: number}, value: Ingredient) => {
          if (acc[value.name]) {
            acc[value.name] += value.quantity
          } else {
            acc[value.name] = value.quantity
          }
          return acc
        }, {}
      )
      const result: Ingredient[] = Object.keys(obj).map(key => ({
        name: key,
        quantity: obj[key]
      }))
      this.ingredients$.next(result)
    } else{
      this.ingredients$.next(ingredients)
    }
    this.setIngrNumber()
    sessionStorage.setItem('cocktailsPanier', JSON.stringify(this.ingredients$.value))
    console.log('Total panier:', this.ingredients$.value);
  }

  deletePanier(): void {
    sessionStorage.clear()
    this.ingredients$.next(null)
    this.setIngrNumber()
  }

  setIngrNumber() {
    this.ingredientNumber$.next(this.ingredients$.value ? this.ingredients$.value.length : 0)
  }

  constructor() {
    this.ingredients$.subscribe((ingredients: Ingredient[] | null) => ingredients && ingredients.length && this.ingredientNumber$.next(ingredients.length))
  }

}
