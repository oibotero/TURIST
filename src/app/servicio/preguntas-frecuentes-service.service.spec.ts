import { TestBed } from '@angular/core/testing';

import { PreguntasFrecuentesServiceService } from './preguntas-frecuentes-service.service';

describe('PreguntasFrecuentesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreguntasFrecuentesServiceService = TestBed.get(PreguntasFrecuentesServiceService);
    expect(service).toBeTruthy();
  });
});
