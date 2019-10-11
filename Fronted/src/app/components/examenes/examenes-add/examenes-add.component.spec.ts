import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesAddComponent } from './examenes-add.component';

describe('ExamenesAddComponent', () => {
  let component: ExamenesAddComponent;
  let fixture: ComponentFixture<ExamenesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
