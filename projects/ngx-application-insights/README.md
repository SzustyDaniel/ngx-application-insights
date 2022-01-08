# Ngx Application Insights

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.0.

This library is a wrapper to the <a href="https://github.com/microsoft/applicationinsights-js">applicationinsights-js</a>.
Please refer to the applicationinsights-js documentation for more advanced configuration if you require one.

example basic configuration

```
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxAzureInsightsModule.forRoot({
      enableAutoRouteTracking: true, // enable route navigation tracking it is false by default
      instrumentationKey: 'Your Instrumentation Key From Azure here',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Build

Run `ng build ngx-application-insights` to build the project. The build artifacts will be stored in the `dist/` directory.
