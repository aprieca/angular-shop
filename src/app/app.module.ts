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
import { HomeComponent } from './home/home.component';
import { CategoryProductComponent } from './product/category/category-product/category-product.component';
import {CategoryModule} from "./product/category/category.module";
import {LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import {DiscountBarComponent} from "./layout/discount-bar/discount-bar.component";
import { AboutComponent } from './about/about.component';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    BannersComponent,
    CategoryDisplayComponent,
    HomeComponent,
    CategoryProductComponent,
    DiscountBarComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CategoryModule,
  ],
  providers: [{provide: LOCALE_ID,useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
