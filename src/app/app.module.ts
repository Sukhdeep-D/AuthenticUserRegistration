import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from  '@angular/forms'
import { JwtintercepterService } from './jwtintercepter.service';
import { JwtModule } from '@auth0/angular-jwt';
import { UserComponent } from './user/user.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { AgGridModule } from 'ag-grid-angular';
import { UserlistComponent } from './user/userlist/userlist.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { BuysubscriptionComponent } from './subscription/buysubscription/buysubscription.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SubscriptionplanComponent } from './subscription/subscriptionplan/subscriptionplan.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HospitalComponent } from './hospital/hospital.component';
import { AddUserComponent } from './user/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    SidebarMenuComponent,
    UserlistComponent,
    SubscriptionComponent,
  BuysubscriptionComponent,
 SubscriptionplanComponent,
 DoctorComponent,
 HospitalComponent,
 AddUserComponent
  ],
  imports: [
   
    AgGridModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  
    ToastrModule.forRoot({  timeOut: 4000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    iconClasses:{
      error: 'toast-error',
  info: 'toast-info',
  success: 'toast-success',
  warning: 'toast-warning',
    } }), 
    ToastContainerModule,
   
    JwtModule.forRoot({
      config:{
        tokenGetter:()=>{
          return sessionStorage.getItem('currentUser')?JSON.parse(sessionStorage.getItem('currentUser')as string).token:null;
        }
      }
    }),
   NgxIntlTelInputModule,
   BsDropdownModule.forRoot(),
   TooltipModule.forRoot(),
   ModalModule.forRoot()
   ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:JwtintercepterService,
    multi:true
  },],
 
  bootstrap: [AppComponent]  
})
export class AppModule { }
