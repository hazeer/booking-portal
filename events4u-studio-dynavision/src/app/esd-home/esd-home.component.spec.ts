import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsdHomeComponent } from './esd-home.component';

describe('EsdHomeComponent', () => {
  let component: EsdHomeComponent;
  let fixture: ComponentFixture<EsdHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsdHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
