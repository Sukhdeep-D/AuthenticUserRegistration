import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  menuType: String = '';
  isExpanded = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    debugger;
    this.router.events.subscribe((val: any) => {
      console.warn(val.url);
      if (val.url) {
        if (sessionStorage.getItem('currentUser')) {
          this.menuType = "Deepak";
        }

        else {
          this.menuType = 'unknown';
        }
      }
    });
  }
  menu = [
    {
      name: "Home",
      text: "Home",
      title: "Home",
      path: "/home",
    },
    {
      name: "User",
      text: "User",
      title: "Users ",
      subMenus: [
        {
          name: "User",
          text: "User",
          title: "Add user",
          path: "/user",
        },
      ]
    }
  ];


  expansion: any = {};

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
