import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsdDashboardComponent } from './esd-dashboard.component';

describe('EsdDashboardComponent', () => {
  let component: EsdDashboardComponent;
  let fixture: ComponentFixture<EsdDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsdDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsdDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
