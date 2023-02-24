package com.vortex.framework.services.feature;

import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication 
@EntityScan(basePackages = {"com.vortex.framework.entities.feature"})
@EnableJpaRepositories(basePackages = {"com.vortex.framework.entities.feature"})
public class FeaturesServicesApp {

	public static void main(String[] args) {
		Map<String,String> sysEnv = System.getenv();
		for (String key : sysEnv.keySet()) {
			System.out.println("Environment: " + key + " = " + sysEnv.get(key));
		}
		SpringApplication.run(FeaturesServicesApp.class, args);
	}

}
