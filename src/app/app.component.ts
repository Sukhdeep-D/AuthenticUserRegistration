import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ActiveguardService } from './activeguard.service';
import { JwtintercepterService } from './jwtintercepter.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AuthenticUserRegistration';
  sidebarExpanded = true;
  constructor(public loginService:LoginService,private can:ActiveguardService){}
  logout()
  {
    this.loginService.LogOut();
  }
  

}
