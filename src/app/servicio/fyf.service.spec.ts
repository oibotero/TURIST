import { TestBed } from '@angular/core/testing';

import { FyfService } from './fyf.service';

describe('FyfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FyfService = TestBed.get(FyfService);
    expect(service).toBeTruthy();
  });
});
