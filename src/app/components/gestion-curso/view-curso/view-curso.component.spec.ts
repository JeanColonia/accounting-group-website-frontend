import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCursoComponent } from './view-curso.component';

describe('ViewCursoComponent', () => {
  let component: ViewCursoComponent;
  let fixture: ComponentFixture<ViewCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
