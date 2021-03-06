import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent }
  , { path:'welcome/:name', component: WelcomeComponent , canActivate:[RouteGuardService] },
  { path: 'welcome', component: WelcomeComponent , canActivate:[RouteGuardService]},
  { path: 'list-todos', component: ListTodosComponent, canActivate:[RouteGuardService] },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
