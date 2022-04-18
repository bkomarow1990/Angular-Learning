import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material/material.module';
import { AuthViewComponent } from './account/auth-view/auth-view.component';
import { LoginComponent } from './account/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './account/register/register.component';
import { HomeComponent } from './home/home.component';
import { ActionsComponent } from './actions/actions/actions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddActionComponent } from './actions/add-action/add-action.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthViewComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ActionsComponent,
    AddActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
