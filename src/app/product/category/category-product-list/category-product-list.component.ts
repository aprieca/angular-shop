import {Component, Input, OnInit} from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {ICategoryProduct} from "../category-product/category-product.interface";

@Component({
  selector: 'app-category-product-list',
  templateUrl: './category-product-list.component.html',
  styleUrls: ['./category-product-list.component.scss']
})
export class CategoryProductListComponent {

  @Input() productList$?: Observable<ICategoryProduct[]>

  constructor() {
  }

}
