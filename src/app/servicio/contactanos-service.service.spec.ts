import { TestBed } from '@angular/core/testing';

import { ContactanosServiceService } from './contactanos-service.service';

describe('ContactanosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactanosServiceService = TestBed.get(ContactanosServiceService);
    expect(service).toBeTruthy();
  });
});
