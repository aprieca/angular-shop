import {Component, Input, OnInit} from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {IProduct} from "../product-detail/product-detail.interface";

@Component({
  selector: 'app-product-detail-display',
  templateUrl: './product-detail-display.component.html',
  styleUrls: ['./product-detail-display.component.scss']
})
export class ProductDetailDisplayComponent implements OnInit{

  @Input() product$? : Observable<IProduct[]>


  constructor() {
  }

  protected readonly parseInt = parseInt;

  ngOnInit(): void {

  }
}
