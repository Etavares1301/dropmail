import { TestBed } from '@angular/core/testing';

import { TemporaryEmailService } from './temporary-email.service';

describe('TemporaryEmailService', () => {
  let service: TemporaryEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemporaryEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
