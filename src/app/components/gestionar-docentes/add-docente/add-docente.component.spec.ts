import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocenteComponent } from './add-docente.component';

describe('AddDocenteComponent', () => {
  let component: AddDocenteComponent;
  let fixture: ComponentFixture<AddDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
