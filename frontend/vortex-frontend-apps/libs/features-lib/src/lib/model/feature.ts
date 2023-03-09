import { Injectable } from "@angular/core";


export interface IFeature {
    id: number;
    name: string;
	typeCode: string;
	resourceName: string;
    parentFeatureId: number;
    sortOrder: number;
    appName: string;
    activeInd: string;
    featureImageClass: string;
    description: string;
}

@Injectable({
    providedIn: 'root'
})
export class Feature implements IFeature {
    id!: number;
    name!: string;
	typeCode!: string;
	resourceName!: string;
    parentFeatureId!: number;
    sortOrder!: number;
    appName!: string;
    activeInd!: string;
    featureImageClass!: string;
    description!: string;
}