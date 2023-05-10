import {Component, OnInit} from '@angular/core';
import {ICategoryDisplay} from './category-display.interface';
import {CategoryDisplayService} from './category-display.service';
import {catchError, Observable, startWith, throwError} from 'rxjs';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.scss'],
})
export class CategoryDisplayComponent implements OnInit, ICategoryDisplay {

  id: string = "";
  category: string = '';
  image: string = '';
  categoryDisplay$?: Observable<ICategoryDisplay[]>

  constructor(private CategoryDisplayService: CategoryDisplayService) {
  }

  ngOnInit(): void {
    this.categoryDisplay$ = this.CategoryDisplayService.getCategoryData().pipe(
      catchError(error => {
        console.log("Error al cargar el slider", error)
        return throwError(() => error);
      }),
    );
  }
}





