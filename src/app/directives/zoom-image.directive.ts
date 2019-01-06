import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomImage]'
})
export class ZoomImageDirective {

  @HostBinding('style.transform') zoomImage:String;
  constructor() { }

  @HostListener('mouseenter') onMouseEnter(){
    this.zoomImage='scale(1.3)';
  }
  
  @HostListener('mouseleave') onMouseLeave(){
    this.zoomImage='scale(1.0)';
  }
}
