import { TestBed } from '@angular/core/testing';

import { RegistarLugarService } from './registar-lugar.service';

describe('RegistarLugarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistarLugarService = TestBed.get(RegistarLugarService);
    expect(service).toBeTruthy();
  });
});
