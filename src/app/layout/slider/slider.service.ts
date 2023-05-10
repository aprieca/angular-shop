import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISlider } from './slider.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  constructor(private http: HttpClient) {}

getSliderImages(endpoint:string) : Observable<ISlider[]>{
  return this.http.get<ISlider[]>(endpoint);
}

}


