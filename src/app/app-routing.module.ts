import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{path:"",loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
{path:"collections/:id",loadChildren: () => import('./product/category/category.module').then(m => m.CategoryModule)},
  {path:"product/:id",loadChildren: () => import('./product/product-detail/product-detail.module').then(m => m.ProductdetailModule)},
  {path:"about",loadChildren: () => import('./about/about.module').then(m => m.AboutModule)}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
