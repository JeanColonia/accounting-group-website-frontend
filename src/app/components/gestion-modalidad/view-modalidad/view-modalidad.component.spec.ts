import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModalidadComponent } from './view-modalidad.component';

describe('ViewModalidadComponent', () => {
  let component: ViewModalidadComponent;
  let fixture: ComponentFixture<ViewModalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewModalidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewModalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
