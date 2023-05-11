import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {IProduct} from "./product-detail.interface";
import {ProductDetailService} from "./product-detail.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit ,IProduct {

  product$?: Observable<IProduct[]>;
  productId?: string = "";
  description: string = "";
  discount: string = "";
  image: string = "";
  imageBg: string = "";
  name: string = "";
  price: string = "";
  size: string[] = [];
  stock: string = "";
  color: string = "";

  constructor(private productDetailService: ProductDetailService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') ?? undefined;
    if (this.productId) {
      this.product$ = this.productDetailService.getProductInfo(this.productId).pipe(
        catchError(error => {
          console.log("Error al cargar el producto", error)
          return throwError(() => error);
        }),
      );
    }
  }
}
