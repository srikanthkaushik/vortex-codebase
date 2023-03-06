export interface Feature {
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