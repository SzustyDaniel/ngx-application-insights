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

  constructor(
    @Inject('APP_AZURE_CONFIGURATION') configuration: IConfiguration
  ) {
    this.appInsights = new ApplicationInsights({ config: configuration }); // TODO init from for root definition in module.
    this.appInsights.loadAppInsights();
  }
}
