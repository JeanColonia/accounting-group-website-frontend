import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarModalidadComponent } from './actualizar-modalidad.component';

describe('ActualizarModalidadComponent', () => {
  let component: ActualizarModalidadComponent;
  let fixture: ComponentFixture<ActualizarModalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarModalidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarModalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
