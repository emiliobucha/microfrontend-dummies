import { TestBed } from '@angular/core/testing';

import { PersonajesService } from './personajes.service';

describe('PersonajesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonajesService = TestBed.get(PersonajesService);
    expect(service).toBeTruthy();
  });
});
