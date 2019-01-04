import { TestBed } from '@angular/core/testing';

import { MnLibService } from './mn-lib.service';

describe('MnLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MnLibService = TestBed.get(MnLibService);
    expect(service).toBeTruthy();
  });
});
