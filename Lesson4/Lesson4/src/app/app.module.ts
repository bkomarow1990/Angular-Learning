import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {MaterialModule} from "./material/material.module";
import { ShopComponent } from './shop/shop.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ProductListComponent } from './products/product-list/product-list.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { UpsetCategoryComponent } from './categories/upset-category/upset-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    AddCategoryComponent,
    CategoriesListComponent,
    ProductListComponent,
    AddProductComponent,
    EditCategoryComponent,
    UpsetCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
