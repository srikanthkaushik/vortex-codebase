package com.vortex.framework.entities.feature;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FeatureRepository extends JpaRepository<Feature, Long>{
	
	@Query("select f from Feature f where active = 'Y'")
	List<Feature> findActiveFeatures();
}