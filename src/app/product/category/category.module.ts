import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryProductListComponent } from './category-product-list/category-product-list.component';
import {AppRoutingModule} from './category-routing.module'
@NgModule({
  declarations: [
    CategoryProductListComponent
  ],
  exports: [
    CategoryProductListComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ]
})
export class CategoryModule { }
