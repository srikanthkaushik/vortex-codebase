import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FeaturesService } from '../../../features.service';
import { FeaturesLibGlobal } from '../../shared/features-lib-global';
import { Feature } from '../../../model/feature';

@Component({
  selector: 'vortex-apps-features-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.scss'],
})
export class FeaturesListComponent {
  title = "FEATURES LIST";
  selectedItem = "";
  featureList: Feature[] = [];
  constructor(
      private featureServices: FeaturesService,
      public featureLibGlobal: FeaturesLibGlobal,
      private router: Router,
  ) {
    this.initializePage();
  }

  initializePage() {
    this.featureList = this.featureLibGlobal.featureList;
    console.log('feature list in list page:');
    console.log(this.featureList);
  }

  back() {
    this.router.navigate(['/features/featuresearch']);
  }
}
