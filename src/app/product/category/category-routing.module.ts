import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryProductComponent} from "./category-product/category-product.component";

const routes: Routes = [{path:"",component:CategoryProductComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
