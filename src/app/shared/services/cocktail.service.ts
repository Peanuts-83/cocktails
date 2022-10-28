import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { filter, first, map, tap } from 'rxjs/operators'
import { initialCocktails } from '../init/initialCocktails'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  cocktailApi: string = 'https://restapi.fr/api/tomsCocktails'
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
      .post<Cocktail>(this.cocktailApi, cocktail)
      .pipe(
        tap((cocktail: Cocktail) => this.cocktails$.next([...this.cocktails$.value, cocktail]))
      )
  }

  public editCocktail(cocktailId: string, editedCocktail: Cocktail): Observable<Cocktail> {
    return this.http
      .patch<Cocktail>(`${this.cocktailApi}/${cocktailId}`, editedCocktail)
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

  public deleteCocktail(cocktailId: string): Observable<Cocktail> {
    return this.http
      .delete<Cocktail>(`${this.cocktailApi}/${cocktailId}`)
      .pipe(
        tap(() => {
          this.cocktails$.next(
            this.cocktails$.value.filter((cocktail: Cocktail) => {
              if (cocktail._id !== cocktailId) {
                return cocktail
              }
              return null
            })
          )
        })
      )
  }

  public fetchCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.cocktailApi).pipe(
      tap((cocktails: Cocktail[]) => this.cocktails$.next(cocktails))
    )
  }

  // Gestion de la liste de recettes
  public seed(): void {
    this.http.get<Cocktail[]>(this.cocktailApi).pipe(
      tap((cocktails: Cocktail[]) => {
        // Ajoute les cocktails de base si liste vide
        if (!cocktails.length) {
          console.log('Add cocktails', cocktails)
          this.http.post(this.cocktailApi, initialCocktails).subscribe()
        }
        // Si un cocktail de base manque il est ajouté
        initialCocktails.forEach((cocktail: Cocktail) => {
          if (!cocktails.some(c => c.name === cocktail.name)) {
            console.log('Initial cocktail added:', cocktail.name)
            this.http.post(this.cocktailApi, cocktail).subscribe()
          }
        })
        // Supprime d'éventuels coktails dont le nom est en doublon
        cocktails.forEach((cocktail: Cocktail, i: number) => {
          if (cocktails.slice(i + 1).some(c => c.name === cocktail.name)) {
            const ids = cocktails
              .map(c => c.name === cocktail.name ? c._id : null)
              .filter(n => n !== null)
            ids.slice(1).forEach(id => {
              console.log('Delete duplicated cocktail:', cocktails.filter(c => c._id === id))
              this.http.delete(`${this.cocktailApi}/${id}`).subscribe()
            })
          }
        })
      })
    ).subscribe((cocktails: Cocktail[]) => this.cocktails$.next(cocktails))
  }

  constructor(private http: HttpClient) {
    this.seed()
  }

}
