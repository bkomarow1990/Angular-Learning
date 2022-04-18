import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';


@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate {
  constructor(private accountService : AccountService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.accountService.isAuthenticated()) {
        this.router.navigate(['account/login']);
        return false;
      }

      return true;
  }

}
