import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../Category";
import {categoriesList} from "../categories-list";
import * as data from './data.json';
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  constructor() { }
  @Input()
  categories: Category[];
  data: any;
  ngOnInit(): void {
    this.categories = data.data;
  }
  removeCategory(i : number){
    categoriesList.splice(i,1);
  }
}
