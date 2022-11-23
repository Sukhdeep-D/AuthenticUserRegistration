import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpclient:HttpClient) { }

  getAll():Observable<any>
  {
    return this.httpclient.get<any>("https://localhost:44385/api/Doctor");
  }

  saveDoctor(newDoctor:Doctor):Observable<Doctor>
  {
    return this.httpclient.post<Doctor>("https://localhost:44385/api/Doctor",newDoctor);
  }

  updateDoctor(newDoctor:Doctor):Observable<Doctor>
  {
    return this.httpclient.put<Doctor>("https://localhost:44385/api/Doctor",newDoctor);
  }

  deleteDoctor(id:number):Observable<any>
  {
    return this.httpclient.delete<any>("https://localhost:44385/api/Doctor/"+ id);
  }
}
