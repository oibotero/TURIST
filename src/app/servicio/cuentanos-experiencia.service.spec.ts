import { TestBed } from '@angular/core/testing';

import { CuentanosExperienciaService } from './cuentanos-experiencia.service';

describe('CuentanosExperienciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuentanosExperienciaService = TestBed.get(CuentanosExperienciaService);
    expect(service).toBeTruthy();
  });
});
