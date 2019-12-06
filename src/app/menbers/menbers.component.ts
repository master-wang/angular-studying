import { Component, OnInit, ViewChild, ElementRef,  AfterViewInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-menbers',
  template: `
    <p>
      menbers works! 
      <input 
      [(ngModel)]="username">
    </p>
    <div #greet>Hello {{ username }}</div>
    <exe-counter [count]="initialCount"></exe-counter>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None // 控制组件的样式局外
})
export class MenbersComponent implements OnInit {
  username:string;
  initialCount: number = 6;

  @ViewChild('greet', {static: true})
  greetDiv: ElementRef;

  ngAfterViewInit() {
    this.greetDiv.nativeElement.style.backgroundColor  = '#ccc';
  }

  constructor(private elementRef: ElementRef) { 
    this.username = "111"
  }

  ngOnInit() {
  }

}
