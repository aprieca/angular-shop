import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, map} from 'rxjs';
import {ICategoryDisplay} from './category-display.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryDisplayService {

  endpoint: string = "http://localhost:3001/categories"

  constructor(private http: HttpClient) {
  }

  public getCategoryData(): Observable<ICategoryDisplay[]> {
    return this.http.get<ICategoryDisplay[]>(this.endpoint);
  }

}

