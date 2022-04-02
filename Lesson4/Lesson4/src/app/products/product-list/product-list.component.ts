import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../categories/Category";
import {categoriesList} from "../../categories/categories-list";
import {productsList} from "../products-list";
import {NewProduct} from "../NewProduct";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  @Input()
  products: NewProduct[];
  ngOnInit(): void {
    this.products = productsList;
  }
  removeProduct(i : number){
    this.products.splice(i,1);
  }

}
