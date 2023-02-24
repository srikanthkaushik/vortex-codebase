package com.vortex.framework.services.role;

import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication 
@EntityScan(basePackages = {"com.vortex.framework.entities.role"})
@EnableJpaRepositories(basePackages = {"com.vortex.framework.entities.role"})
public class RolesServicesApp {

	public static void main(String[] args) {
		Map<String,String> sysEnv = System.getenv();
		for (String key : sysEnv.keySet()) {
			System.out.println("Environment: " + key + " = " + sysEnv.get(key));
		}
		SpringApplication.run(RolesServicesApp.class, args);
	}

}
