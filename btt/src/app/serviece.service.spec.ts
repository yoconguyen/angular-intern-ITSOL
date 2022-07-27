import { TestBed } from '@angular/core/testing';

import { ServieceService } from './serviece.service';

describe('ServieceService', () => {
  let service: ServieceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServieceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
