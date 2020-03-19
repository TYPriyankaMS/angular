import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login1Component } from './login1.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [Login1Component, CartComponent],
  imports: [
    CommonModule
  ]
})
export class Login1Module { }
