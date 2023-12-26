import { Injectable,APP_INITIALIZER } from '@angular/core';
import { environment } from '../environments/environment';
import { IAppConfig } from './shared/models/app-config.model';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Injectable()
export class AppConfig {

  static settings: IAppConfig;
  private httpClient: HttpClient;


    constructor(private handler: HttpBackend) {
      this.httpClient = new HttpClient(handler);
    }

    load() {
        const jsonFile = `assets/config/config.${environment.name}.json`;
        return new Promise<void>((resolve, reject) => {
          this.httpClient.get<any>(jsonFile).subscribe(response => {
               AppConfig.settings = <IAppConfig>response;
               resolve();
            });
        });
    }
}
export function ConfigFactory(config: AppConfig) {
  return () => config.load();
}

export function init() {
  return {
      provide: APP_INITIALIZER,
      useFactory: ConfigFactory,
      deps: [AppConfig],
      multi: true
  }
}

const ConfigModule = {
  init: init
}

export { ConfigModule };
