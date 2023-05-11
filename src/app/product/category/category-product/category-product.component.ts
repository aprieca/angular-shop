import {Component, OnInit} from '@angular/core';
import {ICategoryProduct} from "./category-product.interface";
import {catchError, Observable, throwError} from "rxjs";
import {CategoryProductService} from "./category-product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss']
})
export class CategoryProductComponent implements OnInit, ICategoryProduct {

  discount: string = "";
  favorite: string = "";
  id: string = "";
  image: string = "";
  name: string = "";
  price: string = "";
  catID?: string = "";
  categoryProduct$?: Observable<ICategoryProduct[]>


  constructor(private categoryProductService: CategoryProductService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.catID = this.activatedRoute.snapshot.paramMap.get('id') ?? undefined
    if (this.catID) {
      this.categoryProduct$ = this.categoryProductService.getCategoryProduct(this.catID).pipe(
        catchError(error => {
          console.log("Error al cargar los productos de la categoría", error)
          return throwError(() => error);
        }),
      );
    }
  }
}
