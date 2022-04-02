import {Component, Input, OnInit} from '@angular/core';
import {categoriesList} from "../../categories/categories-list";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../categories/Category";
import {productsList} from "../products-list";
import {NewProduct} from "../NewProduct";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form: FormGroup;
  @Input()
  products : NewProduct[];
  categories: Category[];
  constructor(private formBuilder : FormBuilder) {
    this.categories = categoriesList;
    this.products = productsList;
    this.form = formBuilder.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      price: ["", Validators.required],
      category: ["", Validators.required],
    });
  }


  ngOnInit(): void {
  }
  submit() : void{
    if(this.form.controls["name"].errors)
      alert("Invalid data!");
    else
      alert(this.form.controls["name"].value);
    categoriesList.push({name : this.form.controls["name"].value});
    //
    // alert(this.form.controls["name"].value+" Saved!");
  }
}
