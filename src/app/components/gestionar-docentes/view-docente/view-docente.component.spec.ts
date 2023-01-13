import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDocenteComponent } from './view-docente.component';

describe('ViewDocenteComponent', () => {
  let component: ViewDocenteComponent;
  let fixture: ComponentFixture<ViewDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
