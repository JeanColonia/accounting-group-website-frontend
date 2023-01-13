import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarBlogComponent } from './actualizar-blog.component';

describe('ActualizarBlogComponent', () => {
  let component: ActualizarBlogComponent;
  let fixture: ComponentFixture<ActualizarBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
