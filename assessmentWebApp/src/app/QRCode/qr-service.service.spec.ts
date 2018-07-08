import { TestBed, inject } from '@angular/core/testing';

import { QrServiceService } from './qr-service.service';

describe('QrServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QrServiceService]
    });
  });

  it('should be created', inject([QrServiceService], (service: QrServiceService) => {
    expect(service).toBeTruthy();
  }));
});
