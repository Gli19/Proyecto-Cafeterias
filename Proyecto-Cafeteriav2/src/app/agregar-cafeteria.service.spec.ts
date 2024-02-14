import { TestBed } from '@angular/core/testing';

import { AgregarCafeteriaService } from './agregar-cafeteria.service';

describe('AgregarCafeteriaService', () => {
  let service: AgregarCafeteriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarCafeteriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
