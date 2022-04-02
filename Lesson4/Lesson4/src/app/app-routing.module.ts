import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ShopComponent} from "./shop/shop.component";
import {CategoriesListComponent} from "./categories/categories-list/categories-list.component";
import {AddCategoryComponent} from "./categories/add-category/add-category.component";
import {ProductListComponent} from "./products/product-list/product-list.component";
import {AddProductComponent} from "./products/add-product/add-product.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'categories', component: CategoriesListComponent},
  {path: 'categories/add', component: AddCategoryComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/add', component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
