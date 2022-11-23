import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient,private router:Router) { }

  RegUser(register:Register):Observable<Register>
  {
    debugger
    return this.httpClient.post<Register>("https://localhost:44385/api/Registration/RegisterUser",register)
   
  }
}
