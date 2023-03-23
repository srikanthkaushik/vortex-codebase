import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feature } from './model/feature';
import { SharedLibGlobal } from '@vortex-apps/shared-lib';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  private featuresAllByAppUri = '/featuresvc/allByApp';
  private featuresAllUri = '/featuresvc/all';
  private serviceUrlBase: string;
  constructor(
    private httpClient: HttpClient,
    private sharedLib: SharedLibGlobal,
    
  ) {   
    this.serviceUrlBase = environment.featuresApiUrl;
    console.log(environment);
  }

  featureListAll(): Observable<Feature[]> {
    const featureListAllUrl = this.featuresAllUri;
    return this.httpClient.get<Feature[]>(featureListAllUrl, {
      headers: {
        'Authorization': 'foo'
      }
    });
  }

  featureListByApp(appCode: string): Observable<Feature[]> {
    console.log('featureListByApp in features.service.ts: appCode: ' + appCode);
    const featuresAllByAppUri = this.serviceUrlBase + this.featuresAllByAppUri;
    return this.httpClient.post<Feature[]>(featuresAllByAppUri, {'appName': appCode}, {
      headers: {
        'Authorization': 'foo'
      },
    });
  }

  featureListByAppNoParm(): Observable<Feature[]> {
    const featuresAllByAppUri = this.serviceUrlBase + this.featuresAllByAppUri;
    return this.httpClient.post<Feature[]>(featuresAllByAppUri, {'appName': this.sharedLib.getAppName()}, {
      headers: {
        'Authorization': 'foo'
      },
    });
  }
}
