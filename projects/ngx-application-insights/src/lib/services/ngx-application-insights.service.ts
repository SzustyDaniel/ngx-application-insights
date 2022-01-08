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
  ICustomProperties,
  ITelemetryItem,
} from '@microsoft/applicationinsights-web';
import { InsightsConfigModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class NgxApplicationInsightsService {
  private readonly appInsights: ApplicationInsights;

  constructor(
    @Inject('APP_INSIGHTS_CONFIG')
    private configuration: InsightsConfigModel
  ) {
    this.appInsights = new ApplicationInsights({ config: configuration });
    this.appInsights.loadAppInsights();
  }

  /**
   * Trigger controlled flush of telemetry data (Not required since it's done automatically)
   */
  public flush(): void {
    this.appInsights.flush();
  }

  /**
   * Modify collected telemetry using a telemetry initializer, for more information please read the documentation at https://github.com/microsoft/applicationinsights-js
   */
  public addTelemetryProperty(
    telemetryItem: (item: ITelemetryItem) => boolean | void
  ): void {
    this.appInsights.addTelemetryInitializer(telemetryItem);
  }

  /**
   * Trace scenarios of entering or leaving a function / method
   */
  public trackTrace(
    trace: ITraceTelemetry,
    customProperties?: ICustomProperties
  ): void {
    this.appInsights.trackTrace(trace, customProperties);
  }

  /**
   * Log user action or certain event
   */
  public trackEvent(
    event: IEventTelemetry,
    customProperties?: ICustomProperties
  ): void {
    this.appInsights.trackEvent(event);
  }

  /**
   * Log exceptions that was handled
   */
  public trackException(
    exception: IExceptionTelemetry,
    customProperties?: ICustomProperties
  ): void {
    this.appInsights.trackException(exception, customProperties);
  }

  /**
   * Log numeric value corresponding to a tracked performance event
   */
  public trackMetric(
    metric: IMetricTelemetry,
    customProperties?: ICustomProperties
  ): void {
    this.appInsights.trackMetric(metric, customProperties);
  }

  /**
   * Log a page or container that was shown to the user
   */
  public trackPageView(page?: IPageViewTelemetry): void {
    this.appInsights.trackPageView(page);
  }

  /**
   * Log page performance
   */
  public trackPagePerformance(
    pagePerformance: IPageViewPerformanceTelemetry
  ): void {
    this.appInsights.trackPageViewPerformance(pagePerformance);
  }

  /**
   * Start a timed event tracking
   * @param name the name of the event
   */
  public startTrackEvent(name: string): void {
    this.appInsights.startTrackEvent(name);
  }

  /**
   * Stops a timed tracked event based on name provided
   * @param name the name of the event
   * @param properties
   * @param measurements
   */
  public stopTrackEvent(
    name: string,
    properties?: { [key: string]: string },
    measurements?: { [key: string]: number }
  ): void {
    this.appInsights.stopTrackEvent(name, properties);
  }

  /**
   * Starts the timer for tracking a page load time.
   * Use this instead of trackPageView if you want to control when the page view timer starts and stops, but don't want to calculate the duration yourself.
   * This method doesn't send any telemetry. Call stopTrackPageEvent to log the end of the page view and send the event.
   * @param name the name of the event to track
   */
  public startTrackPageEvent(name: string): void {
    this.appInsights.startTrackPage(name);
  }

  /**
   * stops the page tracking event
   * @param name the name of the event
   * @param url a relative or absolute url that identifies the page, will default to window location if not provided
   */
  public stopTrackPageEvent(
    name: string,
    url?: string,
    customProperties?: { [key: string]: string },
    measurements?: { [key: string]: number }
  ): void {
    this.appInsights.stopTrackPage(name, url, customProperties, measurements);
  }

  /**
   * Enable or disables the cookie system
   * @param enable set true to enable the cookie system, false to turn it off
   */
  public enableOrDisableCookie(enable: boolean): void {
    this.appInsights.getCookieMgr().setEnabled(enable);
  }

  /**
   * Get the state of the cookie system.
   * @returns true the cookie system is enabled and you could preform actions on it, false any action on cookies using this system will return false
   */
  public isCookieEnabled(): boolean {
    return this.appInsights.getCookieMgr().isEnabled();
  }

  /**
   * Creates a new named cookie
   * @param name  the name of the cookie
   * @param encodedValue the value for the cookie (must be already encoded)
   * @param maxAgeInSeconds the maximum number of seconds the cookie should survive
   * @param domain the domain to set for the cookie
   * @param path  if not provided will be set to "/"
   * @returns true if the cookie was created successfully.
   */
  public setCookie(
    name: string,
    encodedValue: string,
    maxAgeInSeconds?: number,
    domain?: string,
    path?: string
  ): boolean {
    return this.appInsights
      .getCookieMgr()
      .set(name, encodedValue, maxAgeInSeconds, domain, path);
  }

  /**
   * Deletes the named cookie from the system if the cookie support is enabled
   * @param name the name of the cookie
   * @param path the path to where the cookie is, if not provided will be set to "/"
   * @returns true if the cookie was marked for deletion.
   */
  public deleteCookie(name: string, path?: string): boolean {
    return this.appInsights.getCookieMgr().del(name, path);
  }

  /**
   * Purge the cookie from the system, this function ignores the if the cookie support state.
   * @param name  the name of the cookie
   * @param the path to where the cookie is, if not provided will be set to "/"
   * @returns returns true if the cookie was marked for deletion.
   */
  public purgeCookie(name: string, path?: string): boolean {
    return this.appInsights.getCookieMgr().purge(name, path);
  }
}
