import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

class Genre {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  apiUrl: string;
  categoriesUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.categoriesUrl = this.apiUrl + "Category/";
  }
  getAll(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.categoriesUrl+"Get");
  }
  delete(id : number) {
    return this.http.delete(this.categoriesUrl+id);
  }
}
