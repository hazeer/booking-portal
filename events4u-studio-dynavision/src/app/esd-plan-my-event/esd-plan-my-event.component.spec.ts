import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsdPlanMyEventComponent } from './esd-plan-my-event.component';

describe('EsdPlanMyEventComponent', () => {
  let component: EsdPlanMyEventComponent;
  let fixture: ComponentFixture<EsdPlanMyEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsdPlanMyEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsdPlanMyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
