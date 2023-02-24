package com.vortex.framework.objects.feature;

import java.io.Serializable;

public class FeatureVO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6639213148761096782L;

	private long id;
    
	private String name;
	private String typeCode;
	private String resourceName;
    private Long parentFeatureId;
    private int sortOrder;
    private String appName;
    private String activeInd;
    private String featureImageClass;
    private String description;
    

    public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTypeCode() {
		return typeCode;
	}
	public void setTypeCode(String typeCode) {
		this.typeCode = typeCode;
	}
	public String getResourceName() {
		return resourceName;
	}
	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}
	public Long getParentFeatureId() {
		return parentFeatureId;
	}
	public void setParentFeatureId(Long parentFeatureId) {
		this.parentFeatureId = parentFeatureId;
	}
	public int getSortOrder() {
		return sortOrder;
	}
	public void setSortOrder(int sortOrder) {
		this.sortOrder = sortOrder;
	}
	public String getAppName() {
		return appName;
	}
	public void setAppName(String appName) {
		this.appName = appName;
	}
	public String getActiveInd() {
		return activeInd;
	}
	public void setActiveInd(String activeInd) {
		this.activeInd = activeInd;
	}
	public String getFeatureImageClass() {
		return featureImageClass;
	}
	public void setFeatureImageClass(String featureImageClass) {
		this.featureImageClass = featureImageClass;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
