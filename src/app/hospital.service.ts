import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from './hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<any>
  {
    return this.httpClient.get<any>("https://localhost:44385/api/hospital");
  }

  saveHospital(newHospital:Hospital):Observable<Hospital>
  {
    return this.httpClient.post<Hospital>("https://localhost:44385/api/hospital",newHospital);
  }

  updateHospital(newHospital:Hospital):Observable<Hospital>
  {
    return this.httpClient.put<Hospital>("https://localhost:44385/api/Hospital",newHospital);
  }

  deleteHospital(id:number):Observable<any>
  {
    return this.httpClient.delete<any>("https://localhost:44385/api/Hospital/"+ id);
  }
}
