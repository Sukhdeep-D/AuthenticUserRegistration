import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  menuType:String=''
 
  constructor(private route:Router,private loginService:LoginService) { }

  ngOnInit(): void {
   
    
  }
  gotoUser(){
    this.route.navigateByUrl('/user');
  }

  gotodisplay(){
    this.route.navigateByUrl('/user/userList');
  }

  gotoHospital(){
    this.route.navigateByUrl('/hospital');
  }
  gotoDoctor(){
    this.route.navigateByUrl('/doctor');
  }
  gotosign(){
    this.route.navigateByUrl('/login');
  }
  


  expansion: any = {};

 
}
