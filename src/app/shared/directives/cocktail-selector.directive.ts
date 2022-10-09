import { AfterViewInit, Directive, ElementRef, HostListener, OnInit, ViewChildren } from '@angular/core'
import { CocktailService } from '../services/cocktail.service'

/**
 * Sets activeCocktail button highlighted
 * Applied to all DOM elem with 'appCocktailSelector' property
 * Feeds cocktailService.buttonsList[]
 */
@Directive({ selector: '[appCocktailSelector]' })
export class CocktailSelectorDirective implements OnInit {

  // @HostListener('click', ['$event'])
  // onClick(event: any) {
  //   // console.log('Event:', event);
  //   this.cocktailService.buttonsList.forEach(btn => {
  //     btn.style.backgroundColor = 'white'
  //     btn.style.color = 'var(--text-regular)'
  //   })
  //   event.target.style.backgroundColor = 'var(--primary)'
  //   event.target.style.color = 'white'
  // }

  constructor(private el: ElementRef<HTMLLIElement>, private cocktailService: CocktailService) {
    // console.log('el:', el);
  }

  ngOnInit(): void {
    // this.cocktailService.buttonsList.push(this.el.nativeElement)
  }
}