import { IConfiguration } from '@microsoft/applicationinsights-core-js';
import { IConfig } from '@microsoft/applicationinsights-web';

export interface InsightsConfigModel extends IConfiguration, IConfig {}
