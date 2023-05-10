import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IDiscountBar} from './discount-bar.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiscountBarService {

  endPoint: string = "http://localhost:3001/promotions/discount-bar"

  constructor(private http: HttpClient) {
  }

  getSliderImages(): Observable<IDiscountBar[]> {
    return this.http.get<IDiscountBar[]>(this.endPoint);
  }

}


