import {Component, OnInit} from '@angular/core';
import {DiscountBarService} from './discount-bar.service';
import {IDiscountBar} from './discount-bar.interface';
import {catchError, Observable, throwError} from 'rxjs';


@Component({
  selector: 'app-discount-bar',
  templateUrl: './discount-bar.component.html',
  styleUrls: ['./discount-bar.component.scss'],
})
export class DiscountBarComponent implements OnInit, IDiscountBar {
  text: string = "";
  enabled: string = "";
  discountBarData$?: Observable<IDiscountBar[]>

  constructor(private discountBarService: DiscountBarService) {
  }

  ngOnInit(): void {
    this.discountBarData$ = this.discountBarService.getSliderImages().pipe(
      catchError(error => {
        console.log("Error al cargar la barra de descuentos", error)
        return throwError(() => error);
      }),
    );
  }
}
