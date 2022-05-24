import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appBreak]',
})
export class BreakDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const { keyCode } = event;
    if (keyCode === 32 || keyCode === 13) {
      const mario = this.el.nativeElement.children[0];
      console.log(this.el.nativeElement.children);
      for (let i = 1; i < this.el.nativeElement.children.length; i++) {
        const child = this.el.nativeElement.children[i];
        const type = child.attributes?.['type']?.nodeValue;
        let marioLeft = mario.style.left;
        marioLeft = Number(marioLeft.substring(0, marioLeft.length - 1));
        let boxLeft = child.style.left;
        boxLeft = Number(boxLeft.substring(0, boxLeft.length - 1));

        if (marioLeft >= boxLeft - 1 && marioLeft <= boxLeft + 2) {
          setTimeout(() => {
            if (type == 'box') {
              this.el.nativeElement.children[
                i
              ].children[1].style.backgroundPosition = '-62px -18px';

              this.el.nativeElement.children[i].children[1].style.animation =
                '';
              this.el.nativeElement.children[i].children[0].style.display =
                'block';
              this.el.nativeElement.children[i].children[0].style.animation =
                'moveUp .5s ease';
            } else {
              setTimeout(() => {
                this.el.nativeElement.children[i].children[1].style.display =
                  'none';
              });
            }
          }, 500);
        }
      }
    }
  }
}
