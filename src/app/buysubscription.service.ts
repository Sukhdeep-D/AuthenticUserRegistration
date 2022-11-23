import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buysubscription } from './buysubscription';

@Injectable({
  providedIn: 'root'
})
export class BuysubscriptionService {

  constructor(private httpCient:HttpClient) { }

  buySubscription(buysub:Buysubscription):Observable<Buysubscription>
  {
    debugger
    return this.httpCient.post<Buysubscription>("https://localhost:44385/api/Subscriptions/AddSubscriptionMember",buysub);
  }
}
