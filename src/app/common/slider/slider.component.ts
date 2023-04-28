import { Component } from '@angular/core';
import { SliderService } from './slider.service';
import { ISlider } from './slider.interface';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements ISlider {
  public images: string[] = [];
  public image: string = "";

  constructor(private SliderService: SliderService) {}

  ngOnInit(): void {
    this.loadImages();
  }

  public loadImages() :void {
    this.SliderService.getSliderImages().subscribe((response: ISlider[]) => {
      response.forEach((element: ISlider) => {
        this.images.push(element.image);
      });
    });
  }
}
