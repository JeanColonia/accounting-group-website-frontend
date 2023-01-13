import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewImagenesComponent } from './view-imagenes.component';

describe('ViewImagenesComponent', () => {
  let component: ViewImagenesComponent;
  let fixture: ComponentFixture<ViewImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewImagenesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
