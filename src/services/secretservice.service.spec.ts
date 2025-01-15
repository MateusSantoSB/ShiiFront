import { TestBed } from '@angular/core/testing';

import { SecretserviceService } from '../services/secretservice.service';

describe('SecretserviceService', () => {
  let service: SecretserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecretserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
