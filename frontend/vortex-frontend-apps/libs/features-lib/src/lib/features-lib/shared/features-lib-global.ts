import { Injectable } from "@angular/core";
import { Feature } from "../../model/feature";

@Injectable({
    providedIn: 'root'
})
export class FeaturesLibGlobal {
    public static appName: string;
    public featureList: Feature[] = [];

     public static setAppName(appName: string) {
        console.log('setting app name:' + appName);
        this.appName = appName;
     }

     public static getAppName() {
        return this.appName;
     }
}