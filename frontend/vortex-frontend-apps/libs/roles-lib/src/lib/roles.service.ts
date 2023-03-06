import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from './model/role';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  // private rolesAllUri = 'http://vroles-v1-vortex-scheduler-dev.apps.okd1.kaushik.int/rolesvc/role/all';
  private rolesAllUri = 'http://localhost:3000/rolesvc/role/all';

  constructor(
    private httpClient: HttpClient
  ) {   }

  roleListAll(): Observable<Role[]> {
    const roleListAllUrl = this.rolesAllUri;
    return this.httpClient.get<Role[]>(roleListAllUrl, {
      headers: {
        'Authorization': 'foo'
      }
    });
  }
}
