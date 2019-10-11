import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoresAddComponent } from './doctores-add.component';

describe('DoctoresAddComponent', () => {
  let component: DoctoresAddComponent;
  let fixture: ComponentFixture<DoctoresAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoresAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoresAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
