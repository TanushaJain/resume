import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMove]'
})
export class MoveDirective {

  private _timeout: any;
  private _isShort: boolean | undefined;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.left='2%';
     this.el.nativeElement.style.bottom='10%';
   }

 @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const {keyCode}= event;
    if(keyCode===39 || keyCode===37){
       this.el.nativeElement.style.animation='run .5s infinite linear'
    this.el.nativeElement.style.animationTimingFunction='step-end'
    
let left=this.el.nativeElement.style.left
      left=Number(left.substring(0,left.length-1))
    setTimeout(()=>{
         
      if(keyCode===39){
      this.el.nativeElement.style.left=`${left+2}%`;
    }

    else if(keyCode===37){
      this.el.nativeElement.style.left=`${left-2}%`;
    }
     this.el.nativeElement.style.animation=''
    this.el.nativeElement.style.animationTimingFunction=''
     }
    ,500)
    }



    else if(keyCode===32 || keyCode===13){
     this.el.nativeElement.style.animation='jump 1s infinite linear'

     setTimeout(()=>{
       this.el.nativeElement.style.animation=''
     },1000)
    }
  }


}
