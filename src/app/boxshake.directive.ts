import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBoxshake]'
})
export class BoxshakeDirective implements OnInit {
  @Input() bottom:string | undefined;
  @Input() left:string|undefined;
  @Input() position:string|undefined;
  constructor(private el: ElementRef) { 
    this.display=this.display.bind(this);
    this.hide=this.hide.bind(this);
  }

  ngOnInit(): void {
    this.el.nativeElement.style.position='absolute'
    this.el.nativeElement.style.bottom=this.bottom;
this.el.nativeElement.style.left=this.left;
this.el.nativeElement.children[1].style.backgroundPosition=this.position;
this.el.nativeElement.children[1].style.animation='glow .3s infinite linear';
this.el.nativeElement.children[2].style.display='none';
    this.el.nativeElement.children[2].style.animation='translate 1s linear';
const icon:HTMLElement=this.el.nativeElement.children[0];
icon.addEventListener('mouseenter',this.display);
icon.addEventListener('mouseleave',this.hide);
icon.addEventListener('click',this.display);

  }

  display(){
  this.el.nativeElement.children[2].style.display='block';
  }

  hide(){
    this.el.nativeElement.children[2].style.display='none';
  }
}
