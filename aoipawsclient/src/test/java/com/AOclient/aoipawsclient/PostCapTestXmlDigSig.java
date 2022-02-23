package com.AOclient.aoipawsclient;

import static org.junit.Assert.*;

import java.security.PrivateKey;

import javax.xml.crypto.dsig.XMLSignatureFactory;

import org.junit.Test;

public class PostCapTestXmlDigSig {

	@Test
	public void test() {
		String destnSignedXmlFilePath = "";
		String privateKeyFilePath = "src/main/resources/keystore/IPAWSOPEN120075.jks";
		String publicKeyFilePath = "src/main/resources/keystore/IPAWSOPEN120075.jks";
		
		XMLSignatureFactory xmlSigFactory = XMLSignatureFactory.getInstance("DOM");  
	    PrivateKey privateKey = new KryptoUtil().getStoredPrivateKey(privateKeyFilePath);  
	}

}
