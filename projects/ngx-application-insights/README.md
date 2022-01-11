# Angular Azure Insights

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

c) Import NgxAzureInsightsModlue to you app.module imports section
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
4) Inject NgxApplicationInsightsService to user component / service etc.
```
import { Component, OnInit } from '@angular/core';
import { NgxApplicationInsightsService } from 'ngx-applications-insights';

@Component({
  selector: 'app-example',
  templateUrl: './test-a.component.html',
  styleUrls: ['./test-a.component.scss'],
})
export class ExampleComponent implements OnInit {
  constructor(private insights: NgxApplicationInsightsService) {}

  ngOnInit(): void {
   console.log('Called track event');
    this.insights.trackEvent({
      name: 'Test event a',
      properties: { ['A']: 12 },
    });
  }
}
```
