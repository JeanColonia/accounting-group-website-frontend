import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTemarioComponent } from './add-temario.component';

describe('AddTemarioComponent', () => {
  let component: AddTemarioComponent;
  let fixture: ComponentFixture<AddTemarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTemarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTemarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
