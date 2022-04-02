import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {Category} from "../Category";
import {categoriesList} from "../categories-list";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  form: FormGroup;
  categoryList : Category[];
  constructor(private formBuilder : FormBuilder) {
    this.categoryList = categoriesList;
    this.form = formBuilder.group({
      name: ["Type: ", Validators.required]
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
