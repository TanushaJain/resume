import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appIconsrc]',
})
export class IconsrcDirective implements OnInit {
  @Input() src: string | undefined;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.background = `url(${this.src}) no-repeat`;
  }
}
