import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "platform"
})
export class SharedLibGlobal {
    public appName!: string;
    public appCode!: string;

    constructor() {
        console.log('shared-lib-global.ts constructor');
    }

    public setAppName(appName: string) {
        console.log('setAppName before ' + this.appName);
        this.appName = appName;
        console.log('setAppName after ' + this.appName);
    }

    public getAppName() {
        console.log('getAppName on ' + this.appName);
        return this.appName;
    }
}