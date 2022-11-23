import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { RegisterService } from 'src/app/register.service';
import { UserService } from 'src/app/user.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserComponent } from '../user.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  frameworkComponents:any;
 editType:any;
  gridApi: any;
  constructor(private userService:UserService,private router:Router,private loginService:LoginService) 
  {     this.frameworkComponents = {
    
    rowEditCRenderer: AddUserComponent
   
    };
    this.editType = "fullRow";
  }
    

  ngOnInit(): void {
    this.getAllUser()
  }
  columnDefs = [

    {headerName: 'Name', field: 'name', rowDrag: true,editable:true},
    {headerName: 'User Name', field: 'userName', editable:true},
    {headerName: 'Email', field: 'email', editable:true},
    {headerName: 'Address', field: 'streetAddress', editable:true},
    {headerName: 'Phone Number ', field: 'phoneNumber',editable:true},
    {headerName: 'State', field: 'state', editable:true},
    {headerName: 'City', field: 'city',editable:true},
    {headerName: 'Zip Code', field: 'postalCode'},
    {
      headerName: "Actions",
      field: "action",
      cellRenderer: "rowEditCRenderer",
      cellRendererParams: {
       
      },
      width: 180
    } 
];

rowData = [];

defaultColDef = {
   
  sortable: true,
   enableFilter:true,
  filter:true,
   flex: 1,
     floatingFilter: true,
     resizable: true,
     editable:true,
    
    
   
  
  
  
};
getAllUser()
{
  if(this.loginService.isAuthenticated())
  {
    this.userService.GetUserList().subscribe((response)=>{

      this.rowData=response;
      console.log(this.rowData)
    },(error)=>{
    console.log(error)
    })
    }
    else
    return
  }


  onCellClicked(params:any) {
    debugger;
    if(params.node.field !== 'action') {
      params.data;
      console.log(params.data)
       this.cancelOtherRowEditors(params.node.rowIndex);
    }
  }
  cancelOtherRowEditors(currentRowIndex:any) {
    const renderers = this.gridApi.getCellRendererInstances();
    renderers.forEach(function(renderer:any) {
      if(!renderer._agAwareComponent.isNew && 
        currentRowIndex !== renderer._params.node.rowIndex) {
        renderer._agAwareComponent.onCancelClick();
      }
    });
  }
 
  

}
