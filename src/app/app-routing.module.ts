import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"singup", component:SingupComponent},
  {path:"data", component:DataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
