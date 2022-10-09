import { CocktailService } from './../shared/services/cocktail.service'
import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { Cocktail } from '../shared/interfaces/cocktail.interface'

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss']
})
export class CocktailFormComponent implements OnInit {
  public cocktail!: Cocktail
  public cocktailForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    img: ['', Validators.required],
    description: '',
    ingredients: this.fb.array([], Validators.required)
  })

  public submit(): void {
    if (this.cocktail) {
      this.cocktailService
        .editCocktail(this.cocktail._id!, this.cocktailForm.value)
        .subscribe()
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value).subscribe()
    }
    this.router.navigate(['../'], { relativeTo: this.activatedRoute })
  }

  public get ingredients(): FormArray {
    return this.cocktailForm.get('ingredients') as FormArray
  }

  public addIngredient(): void {
    this.ingredients.push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: [0, Validators.required]
      })
    )
  }

  private initForm(cocktail: Cocktail = {
    name: '',
    img: '',
    description: '',
    ingredients: []
  }): FormGroup {
    return this.fb.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      description: [cocktail.description, Validators.required],
      ingredients: this.fb.array(
        cocktail.ingredients.map(ingredient => {
          return this.fb.group({
            name: [ingredient.name, Validators.required],
            quantity: [ingredient.quantity, Validators.required]
          })
        }), Validators.required
      )
    })
  }

  constructor(
    private fb: FormBuilder,
    private cocktailService: CocktailService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('index')
      if (index) {
        this.cocktailService.getCocktail(+index).subscribe((cocktail: Cocktail) => {
          this.cocktail = cocktail
          this.cocktailForm = this.initForm(this.cocktail)
        })
      } else {
        this.initForm()
      }
    })
  }

}
