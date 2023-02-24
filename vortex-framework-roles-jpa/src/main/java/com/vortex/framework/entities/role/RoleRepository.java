package com.vortex.framework.entities.role;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RoleRepository extends JpaRepository<Role, Long>{
	
	@Query("select f from Role f where active = 'Y'")
	List<Role> findActiveRoles();
}