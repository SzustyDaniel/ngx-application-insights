import { Inject, Injectable, Optional } from '@angular/core';
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
  private appInsights?: ApplicationInsights;

  constructor(
    @Inject('APP_AZURE_CONFIGURATION') configuration: IConfiguration
  ) {
    try {
      this.appInsights = new ApplicationInsights({ config: configuration });
      this.appInsights.loadAppInsights();
    } catch (ex) {
      console.error('Angular Azure Insights service failed to initialize');
    }
  }

  // Trigger controlled flush of the collected data by AppInsights (Not required since it's done automatically)
  public flush(): void {
    this.appInsights?.flush();
  }

  // Modify collected telemetry using a telemetry initializer, for more information please read the documentation at https://github.com/microsoft/applicationinsights-js
  public addTelemetryProperty(
    telemetryItem: (item: ITelemetryItem) => boolean | void
  ): void {
    this.appInsights?.addTelemetryInitializer(telemetryItem);
  }

  // Trace scenarios of entering or leaving a function / method
  public trackTrace(
    trace: ITraceTelemetry,
    customProperties?: ICustomProperties
  ): void {
    this.appInsights?.trackTrace(trace, customProperties);
  }

  // Log user action or certain event
  public trackEvent(
    event: IEventTelemetry,
    customProperties?: ICustomProperties
  ): void {
    this.appInsights?.trackEvent(event);
  }

  // Log exceptions
  public trackException(
    exception: IExceptionTelemetry,
    customProperties?: ICustomProperties
  ): void {
    this.appInsights?.trackException(exception, customProperties);
  }

  // Log numeric value corresponding to a tracked performance event
  public trackMetric(
    metric: IMetricTelemetry,
    customProperties?: ICustomProperties
  ): void {
    this.appInsights?.trackMetric(metric, customProperties);
  }

  // Log a page or container that was shown to the user
  public trackPageView(page?: IPageViewTelemetry): void {
    this.appInsights?.trackPageView(page);
  }

  public trackPagePerformance(
    pagePerformance: IPageViewPerformanceTelemetry
  ): void {
    this.appInsights?.trackPageViewPerformance(pagePerformance);
  }

  // Start a timed event tracking
  public startTrackEvent(name: string): void {
    this.appInsights?.startTrackEvent(name);
  }

  public stopTrackEvent(
    name: string,
    properties?: { [key: string]: string },
    measurements?: { [key: string]: number }
  ): void {
    this.appInsights?.stopTrackEvent(name, properties);
  }

  public startTrackPageEvent(name: string): void {
    this.appInsights?.startTrackPage(name);
  }

  public stopTrackPageEvent(
    name: string,
    url?: string,
    customProperties?: { [key: string]: string },
    measurements?: { [key: string]: number }
  ): void {
    this.appInsights?.stopTrackPage(name, url, customProperties, measurements);
  }

  public enableOrDisableCookie(enable: boolean): void {
    this.appInsights?.getCookieMgr().setEnabled(enable);
  }

  public isCookieEnabled(): boolean | undefined {
    return this.appInsights?.getCookieMgr().isEnabled();
  }

  public setCookie(
    name: string,
    encodedValue: string,
    maxAgeInSeconds?: number,
    domain?: string,
    path?: string
  ): boolean | undefined {
    return this.appInsights
      ?.getCookieMgr()
      .set(name, encodedValue, maxAgeInSeconds, domain, path);
  }

  public deleteCookie(name: string, path?: string): boolean | undefined {
    return this.appInsights?.getCookieMgr().del(name, path);
  }

  public purgeCookie(name: string, path?: string): boolean | undefined {
    return this.appInsights?.getCookieMgr().purge(name, path);
  }

  // TODO add documentation
}
