package com.vortex.framework.services.feature;

import java.io.IOException;

import javax.annotation.PostConstruct;

import org.springframework.context.annotation.Configuration;

import com.google.firebase.FirebaseApp;

@Configuration
public class FirebaseConfig {

	@PostConstruct
	public void firebaseInit() throws IOException {
			FirebaseApp.initializeApp();
	}
}
