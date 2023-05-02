import { Component } from '@angular/core';
import { ICategoryDisplay } from './category-display.interface';
import { CategoryDisplayService } from './category-display.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.scss'],
})
export class CategoryDisplayComponent implements ICategoryDisplay {
  constructor(private CategoryDisplayService: CategoryDisplayService
    ) {}

  ngOnInit(): void {
    // this.loadCategoryData();
    this.categoryDisplay$ = this.CategoryDisplayService.getCategoryData();
  }

  id:string = "";
  category: string = '';
  image: string = '';
  categoryDisplay$? : Observable<ICategoryDisplay[]>

  // public loadCategoryData() :void {
  //   this.CategoryDisplayService.getCategoryData().subscribe((response:ICategoryDisplay[]) => {
  //     response.forEach((element: ICategoryDisplay) => {
  //       this.categoryData.push("category:"element.category,element.image);
  //     });
  //   });
  // }

  // public loadCategoryData(): void {
  //   this.CategoryDisplayService.getCategoryData().subscribe(
  //     (data) =>{
  //       this.categoryData.push(data)
  //     }
  //   )


//revert to this
  // public loadCategoryData(): void {
  //   this.CategoryDisplayService.getCategoryData().subscribe(
  //     (response: ICategoryDisplay[]) => {
  //       response.forEach((category) => {
  //         this.categoryData.push(category);
  //       });
  //     }
  //   );
  // }


  }


  



