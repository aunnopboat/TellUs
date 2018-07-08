import { TestBed, inject } from '@angular/core/testing';

import { AssessmentServiceService } from './assessment-service.service';

describe('AssessmentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssessmentServiceService]
    });
  });

  it('should be created', inject([AssessmentServiceService], (service: AssessmentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
