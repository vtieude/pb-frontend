import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalingProductComponent } from './saling-product.component';

describe('SalingProductComponent', () => {
  let component: SalingProductComponent;
  let fixture: ComponentFixture<SalingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalingProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
