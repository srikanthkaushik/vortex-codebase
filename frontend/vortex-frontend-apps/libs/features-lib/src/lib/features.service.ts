import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feature } from './model/feature';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  private featuresAllByAppUri = 'http://vfeatures-v1-vortex-scheduler-dev.apps.okd1.kaushik.int/featuresvc/feature/allByApp';
  private featuresAllUri = 'http://vfeatures-v1-vortex-scheduler-dev.apps.okd1.kaushik.int/featuresvc/feature/all';

  constructor(
    private httpClient: HttpClient
  ) {   }

  featureListAll(): Observable<Feature[]> {
    const featureListAllUrl = this.featuresAllUri;
    return this.httpClient.get<Feature[]>(featureListAllUrl, {
      headers: {
        'Authorization': 'foo'
      }
    });
  }

  featureListByApp(appCode: string): Observable<Feature[]> {
    const featuresAllByAppUri = this.featuresAllByAppUri;
    return this.httpClient.post<Feature[]>(featuresAllByAppUri, {'appName': appCode}, {
      headers: {
        'Authorization': 'foo'
      },
    });
  }
}
