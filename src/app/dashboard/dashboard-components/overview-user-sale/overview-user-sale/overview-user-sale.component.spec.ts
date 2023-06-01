import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewUserSaleComponent } from './overview-user-sale.component';

describe('OverviewUserSaleComponent', () => {
  let component: OverviewUserSaleComponent;
  let fixture: ComponentFixture<OverviewUserSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewUserSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewUserSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
