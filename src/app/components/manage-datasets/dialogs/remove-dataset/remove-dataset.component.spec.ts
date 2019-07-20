import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDatasetComponent } from './remove-dataset.component';

describe('RemoveDatasetComponent', () => {
  let component: RemoveDatasetComponent;
  let fixture: ComponentFixture<RemoveDatasetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveDatasetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
