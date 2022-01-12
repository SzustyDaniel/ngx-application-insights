# Angular Azure Insights
[![npm version](https://badge.fury.io/js/ngx-applications-insights.svg)](https://badge.fury.io/js/ngx-applications-insights)

This is a basic angular wrapper implementation for the <a href="https://github.com/microsoft/applicationinsights-js">ApplicationInsights-JS</a> package.

## Getting started

a) Make sure you install ApplicationInsights-JS package
```
npm i @microsoft/applicationinsights-web
```

b) Install this package 
```
npm i ngx-applications-insights
```

c) Import NgxApplicationInsightsModule to you app.module imports section
```
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxApplicationInsightsModule.forRoot({
      enableAutoRouteTracking: true, // enable route navigation tracking, the default valuefor this is false.
      instrumentationKey: 'Your Instrumentation Key From Azure here',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
