import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtherGuard implements CanActivate {
  constructor(private loginService:LoginService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginService.getToken() != null && this.loginService.getToken()!=""){
        this.loginService.getCurrentUser().subscribe((e)=>{
          if(this.loginService.isLoggedIn() ){
            return true;
          }else{
            this.router.navigateByUrl("/login")
            return false;
          }
        })
      }else{
        this.router.navigateByUrl("/login")
        return false;
      }

      return true;

  }

}
