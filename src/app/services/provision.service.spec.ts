import { TestBed, inject } from '@angular/core/testing';

import { ProvisionService } from './provision.service';

describe('ProvisionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvisionService]
    });
  });

  it('should be created', inject([ProvisionService], (service: ProvisionService) => {
    expect(service).toBeTruthy();
  }));
});
