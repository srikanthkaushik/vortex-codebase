import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class SharedLibGlobal {
    public appName!: string;
    public appCode!: string;
}