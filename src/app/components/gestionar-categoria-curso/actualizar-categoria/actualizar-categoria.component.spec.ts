import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCategoriaComponent } from './actualizar-categoria.component';

describe('ActualizarCategoriaComponent', () => {
  let component: ActualizarCategoriaComponent;
  let fixture: ComponentFixture<ActualizarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
