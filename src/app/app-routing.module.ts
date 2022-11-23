import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ActiveguardService } from './activeguard.service'
import { UserComponent } from './user/user.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { UserlistComponent } from './user/userlist/userlist.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { BuysubscriptionComponent } from './subscription/buysubscription/buysubscription.component';
import { SubscriptionplanComponent } from './subscription/subscriptionplan/subscriptionplan.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HospitalComponent } from './hospital/hospital.component';
import { AddUserComponent } from './user/add-user/add-user.component';
const routes: Routes = [
  
  {path:"home",component:HomeComponent,canActivate:[ActiveguardService]},
  {path:"about",component:AboutComponent,canActivate:[ActiveguardService]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"user",component:UserComponent},
  {path:'sidebar-menu',component:SidebarMenuComponent},
  {path:'user/userList',component:UserlistComponent},
  {path:'subscription',component:SubscriptionComponent},
  {path:'subscription/buysubscription',component:BuysubscriptionComponent},
  {path:'subscription/subscriptionplan',component:SubscriptionplanComponent},
  {path:'doctor',component:DoctorComponent},
  {path:'hospital',component:HospitalComponent},
  {path:'user/add-user',component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
