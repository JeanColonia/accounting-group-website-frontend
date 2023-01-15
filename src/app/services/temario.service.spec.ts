import { TestBed } from '@angular/core/testing';

import { TemarioService } from './temario.service';

describe('TemarioService', () => {
  let service: TemarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
