import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBanners } from './banners.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  endpoint:string="http://localhost:3001/images/banner"
  constructor(private http:HttpClient) { }


  getBannerImages() : Observable<IBanners[]>{
    return this.http.get<IBanners[]>(this.endpoint);
  }
}
