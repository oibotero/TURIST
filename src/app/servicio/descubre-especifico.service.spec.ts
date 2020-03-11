import { TestBed } from '@angular/core/testing';

import { DescubreEspecificoService } from './descubre-especifico.service';

describe('DescubreEspecificoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DescubreEspecificoService = TestBed.get(DescubreEspecificoService);
    expect(service).toBeTruthy();
  });
});
