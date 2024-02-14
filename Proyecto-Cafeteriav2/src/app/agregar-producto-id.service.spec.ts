import { TestBed } from '@angular/core/testing';

import { AgregarProductoIdService } from './agregar-producto-id.service';

describe('AgregarProductoIdService', () => {
  let service: AgregarProductoIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarProductoIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
