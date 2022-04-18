import { Component, OnInit } from '@angular/core';
import {CategoryServiceService} from "../category-service.service";
import {Category} from "../../../../../../Lesson4/Lesson4/src/app/categories/Category";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories : Category[];
  constructor(private categoryService : CategoryServiceService) {

  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((data)=>{
      this.categories = data;
    });
  }
  delete(id: number){
    this.categoryService.delete(id).subscribe(()=> console.log("Deleted"));
  }

}
