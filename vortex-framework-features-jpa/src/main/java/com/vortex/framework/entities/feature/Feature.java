package com.vortex.framework.entities.feature;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "FEATURES_TBL")
public class Feature {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "FEATURE_ID_SEQ")
	@SequenceGenerator(name = "FEATURE_ID_SEQ", initialValue = 1, allocationSize = 1)
	private long id;

	@Column(name = "FEATURE_NAME", nullable = false, length = 100)
	private String name;

	@Column(name = "FEATURE_DESCRIPTION", nullable = false, length = 256)
	private String description;

	@Column(name = "FEATURE_TYPE_CODE", nullable = true, length = 2)
	private String typeCode;

	@Column(name = "RESOURCE_NAME", nullable = false, length = 255)
	private String resourceName;

	@Column(name = "PARENT_FEATURE_ID", nullable = true)
	private Long parentFeatureId;

	@Column(name = "SORT_ORDER_RANK", nullable = true)
	private int sortOrder;

	@Column(name = "APP_NAME", nullable = true, length = 10)
	private String appName;

	@Column(name = "ACTIVE_IND", nullable = true, length = 1)
	private String active;

	@Column(name = "FEATURE_IMAGE_DESC", nullable = true, length = 256)
	private String featureImageClass;

	public Feature() {
	}

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

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
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