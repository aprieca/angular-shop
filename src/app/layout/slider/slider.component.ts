import { Component } from '@angular/core';
import { SliderService } from './slider.service';
import { ISlider } from './slider.interface';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements ISlider {
  public image: string = "";
  public sliderImages$? : Observable<ISlider[]>

  constructor(private SliderService: SliderService) {}

  ngOnInit(): void {
    this.sliderImages$ = this.SliderService.getSliderImages();
    // this.loadImages();
  }

  // public loadImages() :void {
  //   this.SliderService.getSliderImages().subscribe((response: ISlider[]) => {
  //     response.forEach((element: ISlider) => {
  //       this.images.push(element.image);
  //     });
  //   });
  // }
}
