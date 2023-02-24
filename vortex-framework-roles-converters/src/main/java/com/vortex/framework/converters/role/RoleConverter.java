package com.vortex.framework.converters.role;

import com.vortex.framework.entities.role.Role;
import com.vortex.framework.objects.role.RoleVO;

public class RoleConverter {

	public static RoleVO convertEntityToVO(Role role) {
		RoleVO roleVO = new RoleVO();
		roleVO.setId(role.getId());
		roleVO.setName(role.getName());
		roleVO.setAppName(role.getAppName());
		roleVO.setDescription(role.getDescription());
		roleVO.setReservedInd(role.getReservedInd());
		
		return roleVO;
	}

	public static Role convertVOToEntity(RoleVO role) {
		Role newRole = new Role();
		newRole.setActive("Y");
		newRole.setName(role.getName());
		newRole.setAppName(role.getAppName());
		newRole.setReservedInd(role.getReservedInd());
		newRole.setDescription(role.getDescription());
		return newRole;
	}
}
