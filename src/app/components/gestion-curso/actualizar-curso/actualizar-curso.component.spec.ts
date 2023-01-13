import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCursoComponent } from './actualizar-curso.component';

describe('ActualizarCursoComponent', () => {
  let component: ActualizarCursoComponent;
  let fixture: ComponentFixture<ActualizarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
