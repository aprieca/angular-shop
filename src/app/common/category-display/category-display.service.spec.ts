import { TestBed } from '@angular/core/testing';

import { CategoryDisplayService } from './category-display.service';

describe('CategoryDisplayService', () => {
  let service: CategoryDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
