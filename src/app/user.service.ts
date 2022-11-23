import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './register';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(registerService:RegisterService,private httpClient:HttpClient) { }
  RegUser(register:Register):Observable<Register>
  {
    
    return this.httpClient.post<Register>("https://localhost:44385/api/Registration/RegisterUser",register)
   
  }
  GetUserList():Observable<any>
  {
return this.httpClient.get("https://localhost:44385/api/Registration/UserList");
  }
}
