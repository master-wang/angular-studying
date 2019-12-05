import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; // (1)
import { MemberService } from "../../services/MemberService";
import 'rxjs/add/operator/map'; // (2)

interface Member {
  id: string;
  login: string;
  avatar_url: string;
}

@Component({
  selector: 'app-my-simple-test',
  template: `
    <p>
      name:{{name}}
      我新建的 my-simple-test 组件！
      <input #myInput type="text">
      <button (click)="onClick(myInput.value)">点击</button>
      <button (click)="toggleSkills()">
          {{ condition ? "隐藏技能" : "显示技能" }}
      </button>
    </p>
    <ul>
        <li *ngFor="let skill of skills">
            {{skill}}
        </li>
    </ul>
    <h3>Angular Orgs Members</h3>
    <ul *ngIf="members">
      <li *ngFor="let member of members;">
        <p>
          <img [src]="member.avatar_url" width="48" height="48"/>
          ID：<span>{{member.id}}</span>
          Name: <span>{{member.login}}</span>
        </p>
      </li>
    </ul>
  `,
  styles: []
})
export class MySimpleTestComponent implements OnInit {
  name : string;
  condition :boolean;
  skills: Array<string>;
  members: Member[];

  constructor(private memberService: MemberService) { 
    this.name = "wang";
    this.condition = true;
    this.skills =  ['AngularJS 1.x', 'Angular 2.x', 'Angular 4.x'];
  }

  ngOnInit() {
    // this.http.get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`) // (4)
    //   .map(res => res.json()) // (5)
    //   .subscribe(data => {
    //     if (data) this.members = data; // (6)
    //   });
    this.memberService.getMembers()
      .subscribe(data => {
          if (data) this.members = data;
      });
  }

  onClick(value) {
    this.skills.push(value)
  }

  toggleSkills() {
    this.condition = !this.condition;
  }

}
