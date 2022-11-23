import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveguardService implements CanActivate{

  constructor(private loginService:LoginService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    var token=sessionStorage
    .getItem('currentUser')?JSON.parse(sessionStorage.getItem('currentUser') as string).token:null;  
    if(this.loginService.isAuthenticated())
    {
      debugger
      
      return true;     
    }
    else
    {     
      return false;    
    }     
  }
}
