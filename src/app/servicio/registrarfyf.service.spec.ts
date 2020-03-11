import { TestBed } from '@angular/core/testing';

import { RegistrarfyfService } from './registrarfyf.service';

describe('RegistrarfyfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrarfyfService = TestBed.get(RegistrarfyfService);
    expect(service).toBeTruthy();
  });
});
