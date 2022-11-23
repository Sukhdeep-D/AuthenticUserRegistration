import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from './subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private httpClient:HttpClient) { }

  getPlan():Observable<any>
  {
    return this.httpClient.get("https://localhost:44385/api/Plan/SubscriptionPlanList");
  }

  savePlan(subscription:Subscription):Observable<Subscription>{
    debugger;
    return this.httpClient.post<Subscription>("https://localhost:44385/api/Plan/SavePlan",subscription);
  }
 
 
}
