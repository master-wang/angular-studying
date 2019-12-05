import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { MemberService } from "../services/MemberService";
import { MySimpleTestComponent } from './my-simple-test/my-simple-test.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenbersComponent } from './menbers/menbers.component';



export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user' },
  { path: 'user', component: MySimpleTestComponent },
  { path: 'members', component: MenbersComponent }
];

@NgModule({
  declarations: [ // 挂载组件
    AppComponent,
    MySimpleTestComponent,
    MenbersComponent
  ],
  imports: [ // 导入模块，路由，http,表单
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MemberService],// services 接口
  bootstrap: [AppComponent] // 页面的渲染入口
})
export class AppModule { }
