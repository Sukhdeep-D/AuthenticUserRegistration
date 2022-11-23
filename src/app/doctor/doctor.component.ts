import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor(private doctorService:DoctorService,private toastr:ToastrService,private router:Router,private loginService:LoginService) 
  { }
  frameworkComponents: any;
  DoctorList:Doctor[]=[];
  newDoctor:Doctor=new Doctor();

  ngOnInit(): void {
    this.getall();
  }
  columnDefs = [

    {headerName: 'Name', field: 'doctorname', rowDrag: true},
    {headerName: 'Experience', field: 'expierence'},
    
    {headerName: 'Qualifiation', field: 'qualification'},
    {headerName: 'Specialisation ', field: 'specialisedIn'},
    {
      headerName: 'Edit',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
      onClick: this.editClick.bind(this),
      label: 'Edit'
      },
    },
    {
      headerName: 'Delete',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
      // onClick: this.onDeleteButtonClick.bind(this),
      label: 'Delete'
      },
    },
   
    
];
rowData = [];
defaultColDef = {
  sortable: true,
  
  filter:true,
  flex: 1,
 
    floatingFilter: true,
    resizable: true,
};

 
  getall()
  {
    if(this.loginService.isAuthenticated())
    {
      this.doctorService.getAll().subscribe((response)=>{
  
        this.rowData=response.data;
        console.log(this.rowData)
      },(error)=>{
      console.log(error)
      })
      }
      else
      return
    }

  saveClick()
  {
    this.doctorService.saveDoctor(this.newDoctor).subscribe(
      (response)=>{
        this.getall();
        this.clearRec();
        console.log(response)
        this.toastr.success("Add Successfully!");

      },
      (error)=>{      
        console.log(error);
      }
    )
  }

  clearRec()
  {
      this.newDoctor.doctorname="";
      this.newDoctor.expierence="";
      this.newDoctor.qualification="";
      this.newDoctor.specialisedIn="";
  }

  editClick(hp:any)
  {debugger
    this.newDoctor=hp;
  }

  updateClick()
  {
      this.doctorService.updateDoctor(this.newDoctor).subscribe(
      (response)=>{
        this.getall();
        this.toastr.success("Edited Successfully!");

      },
      (error)=>{
        console.log(error);
      }
    )
  }
  deleteClick(id:number)
  {
   this.doctorService.deleteDoctor(id).subscribe(
      (response)=>{
      this.getall();
      this.toastr.success("Deleted Successfully!");
      },
      (error)=>{
        console.log(error);
      }
     ) 
  }
  onGridReady(params:any)
{
debugger
}

}
