import { Inject, Injectable } from '@angular/core';
import {
  IEventTelemetry,
  IExceptionTelemetry,
  IMetricTelemetry,
  IPageViewPerformanceTelemetry,
  IPageViewTelemetry,
  ITraceTelemetry,
} from '@microsoft/applicationinsights-common';
import {
  ApplicationInsights,
  IConfiguration,
  ICustomProperties,
  ITelemetryItem,
} from '@microsoft/applicationinsights-web';

@Injectable({
  providedIn: 'root',
})
export class AngularAzureInsightsService {
  private readonly appInsights: ApplicationInsights;

  constructor(
    @Inject('APP_AZURE_CONFIGURATION') configuration: IConfiguration
  ) {
    this.appInsights = new ApplicationInsights({ config: configuration });
    this.appInsights.loadAppInsights();
  }

  // Trigger controlled flush of the collected data by AppInsights (Not required since it's done automatically)
  public flush(): void {
    this.appInsights.flush();
  }

  // Modify collected telemetry using a telemetry initializer, for more information please read the documentation at https://github.com/microsoft/applicationinsights-js
  public addTelemetryProperty(
    telemetryItem: (item: ITelemetryItem) => boolean | void
  ): void {
    this.appInsights.addTelemetryInitializer(telemetryItem);
  }

  // Trace scenarios of entering or leaving a function / method
  public trackTrace(
    trace: ITraceTelemetry,
    customProperties?: ICustomProperties
  ): void {
    try {
      this.appInsights.trackTrace(trace, customProperties);
    } catch (e) {}
  }

  // Log user action or certain event
  public trackEvent(
    event: IEventTelemetry,
    customProperties?: ICustomProperties
  ): void {
    this.appInsights.trackEvent(event);
  }

  // Log exceptions
  public trackException(
    exception: IExceptionTelemetry,
    customProperties?: ICustomProperties
  ): void {
    this.appInsights.trackException(exception, customProperties);
  }

  // Log numeric value corresponding to a tracked performance event
  public trackMetric(
    metric: IMetricTelemetry,
    customProperties?: ICustomProperties
  ): void {
    this.appInsights.trackMetric(metric, customProperties);
  }

  // Log a page or container that was shown to the user
  public trackPageView(page?: IPageViewTelemetry): void {
    this.appInsights.trackPageView(page);
  }

  public trackPagePerformance(
    pagePerformance: IPageViewPerformanceTelemetry
  ): void {
    this.appInsights.trackPageViewPerformance(pagePerformance);
  }

  // TODO add logging support through outer service
  // TODO add documentation
  // TODO expose cookie support
}
