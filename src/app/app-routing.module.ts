import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './component/data/data.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SingupComponent } from './component/singup/singup.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"singup", component:SingupComponent},
  {path:"data", component:DataComponent},
  {path:"profile", component:ProfileComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"**",redirectTo:"login",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
