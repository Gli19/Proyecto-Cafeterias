import { TestBed } from '@angular/core/testing';

import { ResenaProductoService } from './resena-producto.service';

describe('ResenaProductoService', () => {
  let service: ResenaProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResenaProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
