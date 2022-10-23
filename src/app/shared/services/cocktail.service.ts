import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { filter, first, map, tap } from 'rxjs/operators'
import { initialCocktails } from '../init/initialCocktails'
import { HttpClient, HttpHeaders } from '@angular/common/http'

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
      .post<Cocktail>('https://restapi.fr/api/tomsCocktails', cocktail)
      .pipe(
        tap((cocktail: Cocktail) => this.cocktails$.next([...this.cocktails$.value, cocktail]))
      )
  }

  public editCocktail(cocktailId: string, editedCocktail: Cocktail): Observable<Cocktail> {
    return this.http
      .patch<Cocktail>(`https://restapi.fr/api/tomsCocktails/${cocktailId}`, editedCocktail)
      .pipe(
        tap((savedCocktail: Cocktail) => {
          this.cocktails$.next(
            this.cocktails$.value.map((cocktail: Cocktail) => {
              if (cocktail._id === savedCocktail._id) {
                return savedCocktail
              } else {
                return cocktail
              }
            })
          )
        })
      )
  }

  public fetchCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>('https://restapi.fr/api/tomsCocktails').pipe(
      tap((cocktails: Cocktail[]) => this.cocktails$.next(cocktails))
    )
  }

  public seed(): void {
    this.http.get<Cocktail[]>("https://restapi.fr/api/tomsCocktails").subscribe((cocktails: Cocktail[]) => {
      if (!cocktails.length) {
        this.http.post("https://restapi.fr/api/tomsCocktails", initialCocktails).subscribe()
      }
    })
    // this.http.delete("https://restapi.fr/api/tomsCocktails/63555476b6ed1c856c8d6b21").subscribe()
  }

  constructor(private http: HttpClient) {
    this.seed()
  }

}
