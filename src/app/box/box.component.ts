import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent implements OnInit {
  @Input() src: string | undefined;
  @Input() height: string | undefined;
  constructor() {}

  ngOnInit(): void {
    if (this.src) {
      //github.com/TanushaJain/resume/blob/main/src/images/graduationresize.png?raw=true
      this.src = `https://github.com/TanushaJain/resume/blob/main/src/images/${this.src}/?raw=true`;
    }
  }
}
