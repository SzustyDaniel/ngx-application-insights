# AngularAzureInsights

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

This is a basic angular wrapper implementation for the <a href="https://github.com/microsoft/applicationinsights-js">ApplicationInsights-JS</a> package

```
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxAzureInsightsModule.forRoot({
      enableAutoRouteTracking: true, // enable route navigation tracking, the default valuefor this is false.
      instrumentationKey: 'Your Instrumentation Key From Azure here',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
