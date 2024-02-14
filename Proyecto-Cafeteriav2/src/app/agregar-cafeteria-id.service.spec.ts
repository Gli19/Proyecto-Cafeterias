import { TestBed } from '@angular/core/testing';

import { AgregarCafeteriaIdService } from './agregar-cafeteria-id.service';

describe('AgregarCafeteriaIdService', () => {
  let service: AgregarCafeteriaIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarCafeteriaIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
