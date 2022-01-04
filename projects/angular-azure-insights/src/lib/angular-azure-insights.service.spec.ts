import { TestBed } from '@angular/core/testing';

import { AngularAzureInsightsService } from './services/angular-azure-insights.service';

describe('AngularAzureInsightsService', () => {
  let service: AngularAzureInsightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularAzureInsightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
