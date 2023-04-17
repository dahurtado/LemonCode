import { TestBed } from '@angular/core/testing';

import { PeliculaApiService } from './pelicula-api.service';

describe('PeliculaApiService', () => {
  let service: PeliculaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
