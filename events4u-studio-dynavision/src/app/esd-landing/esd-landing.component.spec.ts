import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsdLandingComponent } from './esd-landing.component';

describe('EsdLandingComponent', () => {
  let component: EsdLandingComponent;
  let fixture: ComponentFixture<EsdLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsdLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsdLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
