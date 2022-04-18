import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountService } from '../account/account.service';
export class ActionItem {
  id?: number;
  name: string;
  description?: string;
  executionTime?: Date;
  tag?: string;
  aspNetUserId?: string;
}
@Injectable({
  providedIn: 'root'
})

export class ActionsService {
  apiUrl: string;
  actionItemsUrl: string;
  constructor(private http: HttpClient, private accountService: AccountService) {

    this.apiUrl = environment.apiUrl;
    this.actionItemsUrl = this.apiUrl + "ActionItem/";
  }
  getByUser(id: string): Observable<ActionItem[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id); //VERY IMPORTANT
    return this.http.get<ActionItem[]>(this.actionItemsUrl, { params: queryParams });
  }
  removeById(id: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id); //VERY IMPORTANT
    return this.http.delete(this.actionItemsUrl, { params: queryParams, responseType: 'text' });
  }
  addAction(item : ActionItem){
    return this.http.post(this.actionItemsUrl+"add", item, {responseType: 'text'});
  }
}
