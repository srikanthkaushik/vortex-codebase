package com.vortex.framework.converters.feature;

import com.vortex.framework.entities.feature.Feature;
import com.vortex.framework.objects.feature.FeatureVO;

public class FeatureConverter {

	public static FeatureVO convertEntityToVO(Feature feature) {
		FeatureVO featureVO = new FeatureVO();
		featureVO.setId(feature.getId());
		featureVO.setName(feature.getName());
		featureVO.setParentFeatureId(feature.getParentFeatureId());
		featureVO.setResourceName(feature.getResourceName());
		featureVO.setAppName(feature.getAppName());
		featureVO.setSortOrder(feature.getSortOrder());
		featureVO.setTypeCode(feature.getTypeCode());
		featureVO.setFeatureImageClass(feature.getFeatureImageClass());
		featureVO.setDescription(feature.getDescription());
		
		return featureVO;
	}

	public static Feature convertVOToEntity(FeatureVO feature) {
		Feature newFeature = new Feature();
		newFeature.setActive("Y");
		newFeature.setName(feature.getName());
		newFeature.setParentFeatureId(feature.getParentFeatureId());
		newFeature.setResourceName(feature.getResourceName());
		newFeature.setAppName(feature.getAppName());
		newFeature.setSortOrder(feature.getSortOrder());
		newFeature.setTypeCode(feature.getTypeCode());
		newFeature.setFeatureImageClass(feature.getFeatureImageClass());
		newFeature.setDescription(feature.getDescription());
		return newFeature;
	}
}
