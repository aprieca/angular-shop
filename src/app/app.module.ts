import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SliderComponent } from './layout/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { BannersComponent } from './layout/banners/banners.component';
import { CategoryDisplayComponent } from './layout/category-display/category-display.component';
import { TestComponent } from './layout/test/test.component';
import { HomeComponent } from './home/home.component';
import { CategoryProductComponent } from './product/category/category-product/category-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    BannersComponent,
    CategoryDisplayComponent,
    TestComponent,
    HomeComponent,
    CategoryProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
