import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  boxes = [
    {
      name: 'education',
      position: '-262px -18px',
      src: 'graduationresize.png',
      height: '60',
      left: '15%',
      brick: '25%',
    },
    {
      name: 'skills',
      position: '-262px -18px',
      src: 'skills.png',
      height: '70',
      left: '30%',
      brick: '35%',
    },
    {
      name: 'experience',
      position: '-262px -18px',
      src: 'star.png',
      height: '80',
      left: '40%',
      brick: '45%',
    },
    {
      name: 'project',
      position: '-262px -18px',
      src: 'project.png',
      height: '75',
      left: '50%',
      brick: '55%',
    },

    {
      name: 'conatct',
      position: '-262px -18px',
      src: 'contact.png',
      height: '75',
      left: '60%',
      brick: '55%',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
