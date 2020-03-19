import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login1Module } from './login1/login1.module';
import { Login1Component } from './login1/login1.component';

const routes: Routes = [
  {path:'login1',component:Login1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
 Login1Module ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
