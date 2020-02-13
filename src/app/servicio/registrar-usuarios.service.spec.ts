import { TestBed } from '@angular/core/testing';

import { RegistrarUsuariosService } from './registrar-usuarios.service';

describe('RegistrarUsuariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrarUsuariosService = TestBed.get(RegistrarUsuariosService);
    expect(service).toBeTruthy();
  });
});
