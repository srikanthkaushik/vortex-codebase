import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { RolesService } from '../../../roles.service';
import { RolesLibGlobal } from '../../shared/roles-lib-global';
import { Role } from '../../../model/role';

@Component({
  selector: 'vortex-apps-roles-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss'],
})
export class RolesListComponent {
  title = "ROLES LIST";
  selectedItem = "";
  roleList: Role[] = [];
  constructor(
      private Roleservices: RolesService,
      public roleLibGlobal: RolesLibGlobal,
      private router: Router,
  ) {
    this.initializePage();
  }

  initializePage() {
    this.roleList = this.roleLibGlobal.roleList;
    console.log('role list in list page:');
    console.log(this.roleList);
  }

  back() {
    this.router.navigate(['/roles/rolesearch']);
  }
}
