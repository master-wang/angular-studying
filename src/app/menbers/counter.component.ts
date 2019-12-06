import { Component, Input } from '@angular/core';

@Component({
  selector: 'exe-counter',
  template: `
    <p>当前值: {{ count }}</p>
    <button (click)="increment()"> + </button>
    <button (click)="decrement()"> - </button>
  `
})
export class CounterComponent {
  @Input() count: number = 0;
  increment() {
      this.count++;
  }
  decrement() {
      this.count--;
  }
}