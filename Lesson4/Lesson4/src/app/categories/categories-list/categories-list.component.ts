import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../Category";
import {categoriesList} from "../categories-list";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  constructor() { }
  @Input()
  categories: Category[];
  ngOnInit(): void {
    this.categories = categoriesList;
  }
  removeCategory(i : number){
    categoriesList.splice(i,1);
  }
}
