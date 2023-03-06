import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { RolesService } from '../../../roles.service';
import { Role } from '../../../model/role';
import { RolesLibGlobal } from '../../shared/roles-lib-global';

@Component({
  selector: 'vortex-apps-roles-search',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './roles-search.component.html',
  styleUrls: ['./roles-search.component.scss'],
})
export class RolesSearchComponent {
  title = "SEARCH ROLES";
  selectedItem = "";

  constructor(
      private roleservices: RolesService,
      public roleLibGlobal: RolesLibGlobal,
      private router: Router,
  ) {
    // Do something here
  }

  doSearch() {
    console.log('search Roles');
  }

  doAll() {
    console.log('all Roles');
    this.roleservices.roleListAll().subscribe((allRoles: Role[]) => {
      console.log('all Roles received:');
      console.log(allRoles);
      this.roleLibGlobal.roleList = allRoles;
      this.router.navigate(['/roles/rolelist']);
    });
  }

  doAddNewRole() {
    console.log('add new role');
  }
}
