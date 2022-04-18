import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {categoriesList} from "../categories-list";
import {first} from "rxjs";
import {Category} from "../Category";

@Component({
  selector: 'app-upset-category',
  templateUrl: './upset-category.component.html',
  styleUrls: ['./upset-category.component.css']
})
export class UpsetCategoryComponent implements OnInit {

  form: FormGroup;
  id: string;
  isAddMode : boolean;

  constructor(private formBuilder : FormBuilder, private route : ActivatedRoute, private router : Router) {

  }
  submit() : void{
    if (this.isAddMode) {
      this.create();
    } else {
      this.edit();
    }
    this.router.navigate(["/categories/"]);
  }
  create() : void{
    categoriesList.push({id: categoriesList[categoriesList.length-1].id+1, name : this.form.controls["name"].value});
  }
  edit() : void{
    categoriesList.filter((el) => el.id == +this.id)[0].name = this.form.value.name;
    this.router.navigate(["/categories/"]);
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.form = this.formBuilder.group({
      id: [""],
      name: ["", Validators.required]
    });
    if (!this.isAddMode) {
      let c : Category = categoriesList.filter((el) => +this.id == el.id)[0];
      this.form.patchValue(c);
    }

  }

}
