import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailDisplayComponent } from './product-detail-display/product-detail-display.component';
import {AppRoutingModule} from "./product-detail.routing.module";


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductDetailDisplayComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ]
})
export class ProductdetailModule { }
