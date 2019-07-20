import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDatasetsComponent } from './manage-datasets.component';

describe('ManageDatasetsComponent', () => {
  let component: ManageDatasetsComponent;
  let fixture: ComponentFixture<ManageDatasetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDatasetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDatasetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
