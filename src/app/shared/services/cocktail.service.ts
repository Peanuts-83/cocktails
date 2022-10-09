import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { filter, first, map, tap } from 'rxjs/operators'
import { initialCocktails } from '../init/initialCocktails'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  // cocktails list > unique source of truth (UST)
  public cocktails$: BehaviorSubject<Cocktail[] | []> = new BehaviorSubject<Cocktail[] | []>([])

  public getCocktail(i: number): Observable<Cocktail> {
    return this.cocktails$.pipe(
      filter((cocktails: Cocktail[]) => cocktails !== null),
      map((cocktails: Cocktail[]) => cocktails[i])
    )
  }

  public addCocktail(cocktail: Cocktail): Observable<Cocktail> {
    return this.http
      .post<Cocktail>('https://restapi.fr/api/tomCocktails', cocktail)
      .pipe(
        tap((cocktail: Cocktail) => this.cocktails$.next([...this.cocktails$.value, cocktail]))
      )
  }

  public editCocktail(cocktailId: string, editedCocktail: Cocktail): Observable<Cocktail> {
    return this.http
      .patch<Cocktail>(`https://restapi.fr/api/tomCocktails/${cocktailId}`, editedCocktail)
      .pipe(
        tap((savedCocktail: Cocktail) => {
          this.cocktails$.next(
            this.cocktails$.value.map((cocktail: Cocktail) => {
              if (cocktail.name === savedCocktail.name) {
                return savedCocktail
              } else {
                return cocktail
              }
            })
          )
        })
      )
    // const value = this.cocktails$.value
    // this.cocktails$.next(
    //   value.map((cocktail: Cocktail) => {
    //     if (cocktail.name === editedCocktail.name) {
    //       return editedCocktail
    //     } else {
    //       return cocktail
    //     }
    //   })
    // )
  }

  public fetchCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>('https://restapi.fr/api/tomCocktails').pipe(
      tap((cocktails: Cocktail[]) => this.cocktails$.next(cocktails))
    )
  }

  public seed(): void {
    this.http.get<Cocktail[]>("https://restapi.fr/api/tomCocktails").subscribe((cocktails: Cocktail[]) => {
      if (!cocktails.length) {
        this.http.post("https://restapi.fr/api/tomCocktails", initialCocktails).subscribe()
      }
      // this.cocktails$.next(cocktails)
    })
  }

  constructor(private http: HttpClient) {
    this.seed()
  }

}
