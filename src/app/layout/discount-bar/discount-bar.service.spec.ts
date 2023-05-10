import { TestBed } from '@angular/core/testing';

import { DiscountBarService } from './discount-bar.service';


describe('SliderService', () => {
  let service: DiscountBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscountBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
