import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { InsightsConfigModel } from './models';
import { NgxApplicationInsightsService } from './services';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class NgxApplicationInsightsModule {
  public static forRoot(
    serviceConfig: InsightsConfigModel
  ): ModuleWithProviders<NgxApplicationInsightsModule> {
    return {
      ngModule: NgxApplicationInsightsModule,
      providers: [
        {
          provide: 'APP_INSIGHTS_CONFIG',
          useValue: serviceConfig,
        },
        NgxApplicationInsightsService,
      ],
    };
  }

  constructor(
    @Optional() @SkipSelf() parentModule?: NgxApplicationInsightsModule
  ) {
    if (parentModule) {
      throw new Error(
        'Angular Azure Insights module is already loaded. Import it in the AppModule only'
      );
    }
  }
}
