import { Doctor } from "./doctor";

export class Hospital {
    id:number;
    hospitalname:any;
    facilities:any;
    department:any;
    doctorlist:Doctor=new Doctor();
    doctorId:any;

    constructor()
    {
    this.id=0;
    this.hospitalname=null;
    this.facilities=null;
    this.department=null; 
   this.doctorlist.doctorname='';
   this.doctorlist.expierence='';
   this.doctorlist.qualification='';
   this.doctorlist.specialisedIn='';
   this.doctorId=null;
    }
}
