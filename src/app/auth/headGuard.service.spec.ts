/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeadGuardService } from './headGuard.service';

describe('Service: HeadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeadGuardService]
    });
  });

  it('should ...', inject([HeadGuardService], (service: HeadGuardService) => {
    expect(service).toBeTruthy();
  }));
});
