package com.vortex.framework.common;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;

public class FirebaseUtils {

	static final Logger logger = LoggerFactory.getLogger(FirebaseUtils.class);
	
	/**
	 * @param idToken
	 * @return
	 */
	public static String getDecodedFireBaseToken(String idToken) {
		
		logger.info("idToken received: {}", idToken);
		FirebaseToken decodedToken = null;
		String uid = null;
		try {
			if (idToken != null && idToken.length() > 8) {
				String idTokenStr = idToken.substring(8);
				decodedToken = FirebaseAuth.getInstance().verifyIdToken(idTokenStr);
			}
		} catch (FirebaseAuthException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

		}
		if (decodedToken != null) {
			uid = decodedToken.getUid();
		}
		logger.info("uid returned: {}", uid);
		return uid;
	}
}
