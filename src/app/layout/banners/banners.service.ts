import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBanners } from './banners.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  constructor(private http:HttpClient) { }


  getBannerImages() : Observable<IBanners[]>{
    return this.http.get<IBanners[]>('http://localhost:3001/images/banner');
  }
}
