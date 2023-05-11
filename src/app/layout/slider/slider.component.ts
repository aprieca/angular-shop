import {Component, Input, OnInit} from '@angular/core';
import {SliderService} from './slider.service';
import {ISlider} from './slider.interface';
import {catchError, Observable, throwError} from 'rxjs';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, ISlider {
  image: string = "";
  text: string = "";
  title: string = "";
  sliderImages$?: Observable<ISlider[]>

  @Input() endpoint: string = ""

  constructor(private SliderService: SliderService) {
  }

  ngOnInit(): void {
    this.sliderImages$ = this.SliderService.getSliderImages(this.endpoint).pipe(
      catchError(error => {
        console.log("Error al cargar el slider", error)
        return throwError(() => error);
      }),
    );
  }
}
