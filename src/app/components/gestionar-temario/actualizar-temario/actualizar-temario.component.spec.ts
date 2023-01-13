import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTemarioComponent } from './actualizar-temario.component';

describe('ActualizarTemarioComponent', () => {
  let component: ActualizarTemarioComponent;
  let fixture: ComponentFixture<ActualizarTemarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarTemarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarTemarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
