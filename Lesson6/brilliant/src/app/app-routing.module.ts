import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesListComponent} from "./category/categories-list/categories-list.component";
import {LoginComponent} from "./account/login/login.component";
import {RegisterComponent} from "./account/register/register.component";

const routes: Routes = [
  {path: '', component: CategoriesListComponent},
  {path: 'account/login', component: LoginComponent},
  {path: 'account/register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
