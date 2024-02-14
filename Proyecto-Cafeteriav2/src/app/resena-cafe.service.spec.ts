import { TestBed } from '@angular/core/testing';

import { ResenaCafeService } from './resena-cafe.service';

describe('ResenaCafeService', () => {
  let service: ResenaCafeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResenaCafeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
