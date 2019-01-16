import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appShoppingList]'
})
export class ShoppingListDirective {

  constructor() { }

  @HostBinding('style.display') button:String;

  @HostListener('mouseenter') onMouseEnter(event){
    this.button='none';
  }
  
  @HostListener('mouseleave') onMouseLeave(event){
    this.button='block';
  }
}
