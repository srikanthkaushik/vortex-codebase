import { Injectable } from "@angular/core";
import { Role } from "../../model/role";

@Injectable({
    providedIn: 'root'
})
export class RolesLibGlobal {
     public roleList: Role[] = [];
}