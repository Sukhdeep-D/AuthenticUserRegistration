import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { SubscriptionService } from 'src/app/subscription.service';


@Component({
  selector: 'app-subscriptionplan',
  templateUrl: './subscriptionplan.component.html',
  styleUrls: ['./subscriptionplan.component.scss']
})
export class SubscriptionplanComponent implements OnInit {
 
  @ViewChild('model') model: any;
  @ViewChild('modal') modal: any;
  public saveform:FormGroup;
  submitted: boolean = false;
  constructor(private fb:FormBuilder,private subscriptionService:SubscriptionService) { 
    this.saveform=this.fb.group({
      planName:['',Validators.required],
      planPrice:['',Validators.required],
      data:['',Validators.required],
      callLimit:['',Validators.required],
      smSlimit:['',Validators.required],
      validity:['',Validators.required]

    });
  }
 
 
  ngOnInit(): void {
    this.model.show();
    this.modal.show();
  }
  saveplan(){
    debugger;
    if (this.saveform.invalid) // true if any form validation fail
    {
      this.submitted = true;
      return;
    }
    
    this.subscriptionService.savePlan(this.saveform.value).subscribe(
      (Response)=>{
        console.log(Response)
        alert("Plan added successfully");
        this.saveform.reset();
      },
      (error)=>{
        // console.log(error);
       console.log(error);
      })}
     
}
