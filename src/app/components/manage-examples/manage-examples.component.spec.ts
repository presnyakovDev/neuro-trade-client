import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExamplesComponent } from './manage-examples.component';

describe('ManageExamplesComponent', () => {
  let component: ManageExamplesComponent;
  let fixture: ComponentFixture<ManageExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
