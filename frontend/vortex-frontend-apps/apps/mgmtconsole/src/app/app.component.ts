import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Feature } from '@vortex-apps/features-lib';
import { FeaturesService } from '@vortex-apps/features-lib';
import { SharedLibGlobal } from '@vortex-apps/shared-lib';
@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'vortex-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public showMenu = false;
  title = 'Management Console';
  selectedItem =
    'bg-gray-400 text-white rounded-md px-3 py-2 text-sm font-medium';
  availableItem =
    'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium';
  selectedItemResp =
    'bg-gray-400 block text-white rounded-md px-3 py-2 text-sm font-medium';
  availableItemResp =
    'text-gray-300 block hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium';

  selectedRoute = '/';
  availableFeatures!: Feature[];

  constructor (
    private router: Router,
    private featureListService: FeaturesService,
    public sharedLibGlobal: SharedLibGlobal
  ) {
    this.sharedLibGlobal.appCode = 'MGMT';
    this.sharedLibGlobal.appName = 'MANAGEMENT CONSOLE';
    
  }

  ngOnInit() {
    this.initFeatureComponent();
    this.initializeBase();
  }

  async initFeatureComponent():Promise<void> {
    const featLib = await import('@vortex-apps/features-lib');
    featLib.FeaturesLibGlobal.setAppName(this.sharedLibGlobal.appCode);
  }

  initializeBase() {
    this.featureListService.featureListByApp(this.sharedLibGlobal.appCode).subscribe((allFeatures: Feature[]) => {
      console.log('all features received:');
      console.log(allFeatures);
      this.availableFeatures = allFeatures;
    });
  }

  doClick() {
    this.showMenu = !this.showMenu;
    this.router.navigate([this.selectedRoute]);
  }

  doDrop() {
    this.showMenu = !this.showMenu;
  }

  go(featureName: string) {
    this.selectedRoute = '/' + featureName;
    this.doClick();
  }

  getClass(featureName: string) {
    if ('/' + featureName == this.selectedRoute) {
      return this.selectedItem;
    }
    else {
      return this.availableItem;
    }
  }

  getClassResp(featureName: string) {
    if ('/' + featureName == this.selectedRoute) {
      return this.selectedItemResp;
    }
    else {
      return this.availableItemResp;
    }
  }
}
