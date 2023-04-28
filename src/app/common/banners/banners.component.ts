import { Component } from '@angular/core';
import { IBanners } from './banners.interface';
import { BannersService } from './banners.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements IBanners{
  image: string = "";
  // images: string[] = [];

  bannerImages$? :Observable<IBanners[]>
 
  constructor(private BannersService : BannersService){

  }

  ngOnInit(): void {
    this.bannerImages$ = this.BannersService.getBannerImages();
    // this.loadImages()
    // console.log(this.images)
  }

  // public loadImages() :void {
  //   this.BannersService.getBannerImages().subscribe((response: IBanners[]) => {
  //     response.forEach((element: IBanners) => {
  //       this.images.push(element.image);
  //     });
  //   });
  // }
}

