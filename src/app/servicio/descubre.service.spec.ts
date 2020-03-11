import { TestBed } from '@angular/core/testing';

import { DescubreService } from './descubre.service';

describe('DescubreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DescubreService = TestBed.get(DescubreService);
    expect(service).toBeTruthy();
  });
});
