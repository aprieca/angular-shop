import {Component, OnInit} from '@angular/core';
import { IBanners } from './banners.interface';
import { BannersService } from './banners.service';
import {catchError, Observable, throwError} from 'rxjs';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit,IBanners{
  image: string = "";
  text : string = "";
  bannerImages$? :Observable<IBanners[]>

  constructor(private BannersService : BannersService){

  }
  ngOnInit(): void {
    this.bannerImages$ = this.BannersService.getBannerImages().pipe(
      catchError(error => {
        console.log("Error al cargar el banner", error)
        return throwError(() => error);
      }),
    );
  }
}

