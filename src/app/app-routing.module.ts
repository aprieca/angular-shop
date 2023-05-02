import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './layout/test/test.component';

const routes: Routes = [{path:"",loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
{path:"collections/:id",component:TestComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
