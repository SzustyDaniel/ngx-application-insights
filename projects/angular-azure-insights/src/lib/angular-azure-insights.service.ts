import { Inject, Injectable } from '@angular/core';
import {
  ApplicationInsights,
  IConfiguration,
} from '@microsoft/applicationinsights-web';

@Injectable({
  providedIn: 'root',
})
export class AngularAzureInsightsService {
  private readonly appInsights: ApplicationInsights;

  constructor() {
    this.appInsights = new ApplicationInsights({ config: {} }); // TODO init from for root definition in module.
    this.appInsights.loadAppInsights();
  }
}
