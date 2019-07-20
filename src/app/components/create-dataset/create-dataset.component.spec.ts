import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDatasetsComponent } from './create-datasets.component';

describe('CreateDatasetsComponent', () => {
  let component: CreateDatasetsComponent;
  let fixture: ComponentFixture<CreateDatasetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDatasetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDatasetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
