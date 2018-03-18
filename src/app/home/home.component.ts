import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, keyframes, query, stagger, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
trigger('goals', [
  transition('* => *', [
    query(':enter', style({opacity: 0 }), {optional: true}),

    query(':enter', stagger('300ms', [
      animate('.6s ease-in', keyframes([
        style({opacity : 0, transform : 'tranlateY(-75%)', offset: 0}),
        style({opacity : 0.5, transform : 'tranlateY(35%)', offset: .3}),
        style({opacity : 1, transform : 'tranlateY(0)', offset: 1})
      ]))]), {optional: true}),

    query(':leave', stagger('300ms', [
      animate('.6s ease-in', keyframes([
        style({opacity : 1, transform : 'tranlateY(0)', offset: 0}),
        style({opacity : 0.5, transform : 'tranlateY(35%)', offset: .3}),
        style({opacity : 0, transform : 'tranlateY(-75%)', offset: 1})
      ]))]), {optional: true})
    ])
  ])

]
})

export class HomeComponent implements OnInit {
  itemCount = 4;
  btnText = 'Add an item';
  goalText = 'My first life goal';
  goals = [];

  constructor() { }


  ngOnInit() {
    this.itemCount = this.goals.length;
  }
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }
  removeItem(i) {
    this.goals.splice(i, 1);
  }

}
