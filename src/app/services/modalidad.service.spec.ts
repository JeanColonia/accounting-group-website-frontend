import { TestBed } from '@angular/core/testing';

import { ModalidadService } from './modalidad.service';

describe('ModalidadService', () => {
  let service: ModalidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
