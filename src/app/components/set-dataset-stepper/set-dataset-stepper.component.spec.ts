import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDatasetStepperComponent } from './set-dataset-stepper.component';

describe('SetDatasetStepperComponent', () => {
  let component: SetDatasetStepperComponent;
  let fixture: ComponentFixture<SetDatasetStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDatasetStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDatasetStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
