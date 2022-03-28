import { TestBed } from '@angular/core/testing';

import { InterServiceService } from './inter-service.service';

describe('InterServiceService', () => {
  let service: InterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
