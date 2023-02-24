package com.vortex.framework.objects.role;

import java.io.Serializable;

public class RoleVO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6639213148761096782L;

	private long id;
    
	private String name;
    private String appName;
    private String activeInd;
    private String reservedInd;
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
	public String getReservedInd() {
		return reservedInd;
	}
	public void setReservedInd(String reservedInd) {
		this.reservedInd = reservedInd;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
