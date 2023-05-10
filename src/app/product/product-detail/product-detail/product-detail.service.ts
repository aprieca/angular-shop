import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "./product-detail.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  endpoint: string = "http://localhost:3001/product/";

  constructor(private http: HttpClient) {
  }

  getProductInfo(id: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.endpoint + id)
  }
}
