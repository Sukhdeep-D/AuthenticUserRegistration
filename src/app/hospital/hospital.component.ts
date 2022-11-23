import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Hospital } from '../hospital';
import { HospitalService } from '../hospital.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {


  HospitalList:Hospital[]=[];
  DoctorList:Doctor[]=[]
  newHospital:Hospital=new Hospital();
  columnDefs = [
    
    {headerName: 'Name', field: 'hospitalname', rowDrag: true},
    {headerName: 'Facilities', field: 'facilities'},
    {headerName: 'Department', field: 'department'},
    {headerName: 'Doctor Name', field: 'doctorlist.doctorname',},
    {headerName: 'Experience', field: 'doctorlist.expierence'},
   
    {headerName: 'Qualifiation', field: 'doctorlist.qualification'},
    {headerName: 'Specialisation ', field: 'doctorlist.specialisedIn'},
   
    
];

defaultColDef = {
  sortable: true,
  
  filter:true,
  flex: 1,
 
    floatingFilter: true,
    resizable: true,
};
  constructor(private hospitalService:HospitalService, public doctorService:DoctorService,private route:Router,private toastr:ToastrService,private loginService:LoginService) { }

  ngOnInit(): void {
    this.getAll();
    this.getAllDoctors();
  }


  getAllDoctors()
  {
    this.doctorService.getAll().subscribe(
      (response)=>{
        this.DoctorList=response.data;
        console.log(response.data.data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  getAll()
  {
    if(this.loginService.isAuthenticated())
    {
      this.hospitalService.getAll().subscribe((response)=>{
  
        this.HospitalList=response.data;
        console.log(this.HospitalList)
      },(error)=>{
      console.log(error)
      })
      }
      else
      return
    }

  saveClick()
  {
    debugger
    alert(this.newHospital.doctorId)
    this.hospitalService.saveHospital(this.newHospital).subscribe(
      (response)=>{
        
        this.getAll();
        this.clearRec();
        console.log(response)
        this.toastr.success("Add Successfully!");
      },
      (error)=>{
        console.log(error);

      }
    )
  }

  clearRec(){
      this.newHospital.hospitalname="";
        this.newHospital.facilities="";
        this.newHospital.department="";
        this.newHospital.doctorId="";
  }

  editClick(hp:any)
  {
    this.newHospital=hp;
  }

  updateClick()
  {
    this.hospitalService.updateHospital(this.newHospital).subscribe(
      (response)=>{
        this.getAll();
        this.toastr.success("Edited Successfully!");

      },
      (error)=>{
        console.log(error);
      }
    )
  }
  deleteClick(id:number)
  {
   
     this.hospitalService.deleteHospital(id).subscribe(
      (response)=>{
      this.getAll();
      this.toastr.success("Deleted Successfully!");

      },
      (error)=>{
        console.log(error);
      }
     ) 
  }


}
