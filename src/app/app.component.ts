import { CocktailService } from './shared/services/cocktail.service'
import { Component, OnInit } from '@angular/core';
import { Cocktail } from './shared/interfaces/cocktail.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private cocktailService:CocktailService) {}

  ngOnInit(): void {
    this.cocktailService.fetchCocktails().subscribe()
  }
}
