import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BreakDirective } from '../break.directive';
export const resetEvent = new Subject<void>();
@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.css'],
})
export class InteractiveComponent implements OnInit {
  imagesrc: string | undefined;
  constructor() {}

  ngOnInit(): void {
    this.imagesrc = `https://github.com/TanushaJain/resume/blob/main/src/images/controls.png/?raw=true`;
  }

  reset() {
    resetEvent.next();
  }
}
