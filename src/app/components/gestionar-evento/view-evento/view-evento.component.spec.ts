import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEventoComponent } from './view-evento.component';

describe('ViewEventoComponent', () => {
  let component: ViewEventoComponent;
  let fixture: ComponentFixture<ViewEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
