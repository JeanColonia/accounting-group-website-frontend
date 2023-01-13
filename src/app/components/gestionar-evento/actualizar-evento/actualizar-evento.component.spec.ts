import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEventoComponent } from './actualizar-evento.component';

describe('ActualizarEventoComponent', () => {
  let component: ActualizarEventoComponent;
  let fixture: ComponentFixture<ActualizarEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
