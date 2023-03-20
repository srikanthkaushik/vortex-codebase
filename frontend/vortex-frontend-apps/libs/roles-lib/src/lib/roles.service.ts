import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from './model/role';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private rolesAllUri = '/rolesvc/role/all';
  private serviceUrlBase: string;

  constructor(
    private httpClient: HttpClient,
  ) {   
    this.serviceUrlBase = environment.rolesApiUrl;
    console.log(environment);
  }

  roleListAll(): Observable<Role[]> {
    const roleListAllUrl = this.serviceUrlBase + this.rolesAllUri;
    return this.httpClient.get<Role[]>(roleListAllUrl, {
      headers: {
        'Authorization': 'foo'
      }
    });
  }
}
