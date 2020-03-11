import { TestBed } from '@angular/core/testing';

import { FyfespecificoService } from './fyfespecifico.service';

describe('FyfespecificoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FyfespecificoService = TestBed.get(FyfespecificoService);
    expect(service).toBeTruthy();
  });
});
