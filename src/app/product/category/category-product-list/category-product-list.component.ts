import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
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
