import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FeaturesService } from '../../../features.service';
import { Feature } from '../../../model/feature';
import { FeaturesLibGlobal } from '../../shared/features-lib-global';
import { SharedLibGlobal } from '@vortex-apps/shared-lib';

@Component({
  selector: 'vortex-apps-features-search',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './features-search.component.html',
  styleUrls: ['./features-search.component.scss'],
})
export class FeaturesSearchComponent {
  title = "SEARCH FEATURES";
  selectedItem = "";

  constructor(
      private featureServices: FeaturesService,
      public featureLibGlobal: FeaturesLibGlobal,
      private router: Router,
      public sharedLib: SharedLibGlobal
  ) {
    // Do something here
  }

  doSearch() {
    console.log('search features');
  }

  doFeaturesByApp() {
    console.log('doFeaturesByApp()');
    console.log('this.sharedLibGlobal.appName: ' + this.sharedLib.getAppName());
    this.featureServices.featureListByApp(this.sharedLib.getAppName()).subscribe((allFeatures: Feature[]) => {
      console.log('all features received:');
      console.log(allFeatures);
      this.featureLibGlobal.featureList = allFeatures;
      this.router.navigate(['/features/featurelist']);
    });
  }

  doAddNewFeature() {
    console.log('add new feature');
  }
}
