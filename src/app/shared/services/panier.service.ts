import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Ingredient } from '../interfaces/ingredient.interface'

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  public ingredients$: BehaviorSubject<Ingredient[] | null> = new BehaviorSubject<Ingredient[] | null>(JSON.parse(sessionStorage.getItem('cocktailsPanier') || ''))

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
    sessionStorage.setItem('cocktailsPanier', JSON.stringify(this.ingredients$.value))
    console.log('Total panier:', this.ingredients$.value);
  }

  constructor() { }
}
