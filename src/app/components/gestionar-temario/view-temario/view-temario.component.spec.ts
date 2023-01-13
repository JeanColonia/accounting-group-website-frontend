import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTemarioComponent } from './view-temario.component';

describe('ViewTemarioComponent', () => {
  let component: ViewTemarioComponent;
  let fixture: ComponentFixture<ViewTemarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTemarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTemarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
