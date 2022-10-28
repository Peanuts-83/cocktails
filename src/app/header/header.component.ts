import { PanierService } from 'src/app/shared/services/panier.service'
import { Component, OnInit, OnDestroy } from '@angular/core'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public counter: number = 0
  public subscription: Subscription = new Subscription()

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.panierService.ingredientNumber$.subscribe(
        (num: number) => this.counter = num)
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
