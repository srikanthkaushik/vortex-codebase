package com.vortex.framework.entities.role;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "ROLES_TBL")
public class Role {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ROLE_ID_SEQ")
	@SequenceGenerator(name = "ROLE_ID_SEQ", initialValue = 1, allocationSize = 1)
	private long id;

	@Column(name = "ROLE_NAME", nullable = false, length = 100)
	private String name;

	@Column(name = "ROLE_DESCRIPTION", nullable = false, length = 256)
	private String description;

	@Column(name = "APP_NAME", nullable = true, length = 10)
	private String appName;

	@Column(name = "ACTIVE_IND", nullable = true, length = 1)
	private String active;

	@Column(name = "ROLE_RESERVED_IND", nullable = true, length = 256)
	private String reservedInd;

	public Role() {
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

	public String getAppName() {
		return appName;
	}

	public void setAppName(String appName) {
		this.appName = appName;
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