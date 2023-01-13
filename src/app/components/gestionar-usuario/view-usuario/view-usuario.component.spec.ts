import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsuarioComponent } from './view-usuario.component';

describe('ViewUsuarioComponent', () => {
  let component: ViewUsuarioComponent;
  let fixture: ComponentFixture<ViewUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
