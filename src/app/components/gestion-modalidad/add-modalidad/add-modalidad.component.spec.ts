import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalidadComponent } from './add-modalidad.component';

describe('AddModalidadComponent', () => {
  let component: AddModalidadComponent;
  let fixture: ComponentFixture<AddModalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
