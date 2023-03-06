import { Injectable } from "@angular/core";
import { Feature } from "../../model/feature";

@Injectable({
    providedIn: 'root'
})
export class FeaturesLibGlobal {
     public featureList: Feature[] = [];
}