import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICategoryProduct} from "./category-product.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoryProductService {

  endpoint: string = "http://localhost:3001/categories/";

  constructor(private http: HttpClient) {
  }

  getCategoryProduct(id: string): Observable<ICategoryProduct[]> {
    return this.http.get<ICategoryProduct[]>(this.endpoint + id);
  }


}
