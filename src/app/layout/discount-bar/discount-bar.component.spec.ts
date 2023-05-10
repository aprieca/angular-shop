import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountBarComponent } from './discount-bar.component';

describe('SliderComponent', () => {
  let component: DiscountBarComponent;
  let fixture: ComponentFixture<DiscountBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
