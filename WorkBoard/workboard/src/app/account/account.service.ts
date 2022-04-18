import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoginResponseDTO, IUserCredentialsDTO } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  tokenKey: string = "token";
  userIdKey: string = "userIdKey";
  apiUrl: string;
  accountUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.accountUrl = this.apiUrl + "Account/";
  }
  isAuthenticated(): boolean{
    let token: string = localStorage.getItem(this.tokenKey);
    if(!token) return false;
    return true;
  }
  saveToken(token: string, userId: string) {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.userIdKey, userId);
  }
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  getUserId(){
    return localStorage.getItem(this.userIdKey);
  }
  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userIdKey);
  }
  login(credentials: IUserCredentialsDTO): Observable<ILoginResponseDTO> {
    return this.http.post<ILoginResponseDTO>(this.accountUrl + "login", credentials);
  }
  register(credentials: IUserCredentialsDTO): Observable<ILoginResponseDTO> {
    return this.http.post<ILoginResponseDTO>(this.accountUrl + "register", credentials);
  }
}
