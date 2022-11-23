import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Buysubscription } from '../buysubscription';
import { BuysubscriptionService } from '../buysubscription.service';
import { LoginService } from '../login.service';
import { Subscription } from '../subscription';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  planList:Subscription[]=[];
  plan:Subscription=new Subscription();
  buySubscription:Buysubscription=new Buysubscription();
currentDate:Date=new Date();
  constructor(private subscriptionService:SubscriptionService,private loginService:LoginService, private buySub:BuysubscriptionService,private router:Router) { }

  ngOnInit(): void {
  this.getplanlist();
  }
  getplanlist()
  {
    if(this.loginService.isAuthenticated())
  {
    this.subscriptionService.getPlan().subscribe((res)=>{
      this.planList=res;
      console.log(this.planList);
    },
    (error)=>{
      console.log(error);
    }
    )
  }
  else 
  return
  }
  buyPlan(sub:any)
  {
    debugger
    //Get Plan Id 
    this.buySubscription.planId=sub.id;
    
//Get Plan End Date
 let addedDays=sub.validity;
//Get User Id
    let userDetail=sessionStorage['currentUser'];
    let userData=JSON.parse(userDetail);
    this.buySubscription.applicationUserId =userData.id;
   
//for current Date 
  
   this.buySubscription.subStartDate=new Date(this.currentDate);
  
//for getting end date calcultion
 this.buySubscription.subEndDate=new Date(this.currentDate.setDate(this.currentDate.getDate()+sub.validity));
 

    this.buySub.buySubscription(this.buySubscription).subscribe(
      (res)=>{
        this.router.navigateByUrl('/subscription/buysubscription')
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
