/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AsigneeGuardService } from './asigneeGuard.service';

describe('Service: AsigneeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsigneeGuardService]
    });
  });

  it('should ...', inject([AsigneeGuardService], (service: AsigneeGuardService) => {
    expect(service).toBeTruthy();
  }));
});
