import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menbers',
  template: `
    <p>
      menbers works! 
      <input 
      [(ngModel)]="username">
      {{username}}
    </p>
  `,
  styles: []
})
export class MenbersComponent implements OnInit {
  username:string;

  constructor() { 
    this.username = "111"
  }

  ngOnInit() {
  }

}
