import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ActionsComponent } from './actions/actions/actions.component';
import { AddActionComponent } from './actions/add-action/add-action.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'account/register', component: RegisterComponent},
  { path: 'account/login', component: LoginComponent},
  { path: 'actions', component: ActionsComponent},
  { path: 'actions/create', component: AddActionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
