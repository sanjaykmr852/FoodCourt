import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownOpen]'
})
export class DropdownOpenDirective {

  @HostBinding('class.open') isOpened:boolean=false;
  constructor() { }

  @HostListener('click') onMouseclick(){
    this.isOpened=!this.isOpened;
  }

}
