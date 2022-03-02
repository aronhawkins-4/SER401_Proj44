package com.AOclient.aoipawsclient;

import static org.junit.Assert.*;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.security.InvalidAlgorithmParameterException;
import java.security.Key;
import java.security.KeyFactory;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.cert.CertificateException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Collections;
import java.security.cert.Certificate;

import javax.xml.crypto.dsig.CanonicalizationMethod;
import javax.xml.crypto.dsig.DigestMethod;
import javax.xml.crypto.dsig.Reference;
import javax.xml.crypto.dsig.SignatureMethod;
import javax.xml.crypto.dsig.SignedInfo;
import javax.xml.crypto.dsig.Transform;
import javax.xml.crypto.dsig.XMLSignature;
import javax.xml.crypto.dsig.XMLSignatureFactory;
import javax.xml.crypto.dsig.dom.DOMSignContext;
import javax.xml.crypto.dsig.keyinfo.KeyInfo;
import javax.xml.crypto.dsig.keyinfo.KeyInfoFactory;
import javax.xml.crypto.dsig.keyinfo.KeyValue;
import javax.xml.crypto.dsig.spec.C14NMethodParameterSpec;
import javax.xml.crypto.dsig.spec.TransformParameterSpec;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.bouncycastle.asn1.pkcs.PrivateKeyInfo;
import org.junit.Test;
import org.w3c.dom.Document;
import org.xml.sax.SAXException;


public class PostCapTestXmlDigSig {
    private Document getXmlDocument(String xmlFilePath) {
        Document doc = null;
        DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
        dbf.setNamespaceAware(true);
        try {
            doc = dbf.newDocumentBuilder().parse(new FileInputStream(xmlFilePath));
        } catch (ParserConfigurationException ex) {
            ex.printStackTrace();
        } catch (FileNotFoundException ex) {
            ex.printStackTrace();
        } catch (SAXException ex) {
            ex.printStackTrace();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        return doc;
    }

	@Test
	public void test() throws KeyStoreException, Exception, CertificateException, FileNotFoundException, IOException {
		String originalXmlFilePath = "temp.xml";
		String destnSignedXmlFilePath = "src/test/java/finish.xml";
		String privateKeyFilePath = "src/main/resources/keystore/IPAWSOPEN120075.jks";
		String publicKeyFilePath = "src/main/resources/keystore/IPAWSOPEN120075.jks";
		KeyStore ks = KeyStore.getInstance("JKS");
		Document doc = getXmlDocument(originalXmlFilePath);
		char[] pwdArray = "KPO0$o7eaa".toCharArray();
		char[] prvtKey = "PK#4Pzzg5w".toCharArray();
		ks.load(new FileInputStream("src/main/resources/keystore/IPAWSOPEN120075.jks"), pwdArray);
		System.out.println(ks.getCertificate("ipawsopen120075"));
		Key signingKey = ks.getKey("ipawsopen120075",prvtKey);
		Certificate cert = ks.getCertificate("ipawsopen120075");
		System.out.println(signingKey.getAlgorithm());
		KeyFactory keyFactory = null;
		keyFactory = KeyFactory.getInstance("RSA");
		XMLSignatureFactory xmlSigFactory = XMLSignatureFactory.getInstance("DOM");
		byte[] keydata = cert.getEncoded();
		byte[] pkeydata = signingKey.getEncoded();
		PKCS8EncodedKeySpec encodedPrivateKey = new PKCS8EncodedKeySpec(pkeydata);
		X509EncodedKeySpec encodedPublicKey = new X509EncodedKeySpec(keydata);
		PublicKey publicKey = keyFactory.generatePublic(encodedPublicKey);
		
		PrivateKey privateKey = keyFactory.generatePrivate(encodedPrivateKey);
	    DOMSignContext domSignCtx = new DOMSignContext(privateKey, doc.getDocumentElement());  
	    Reference ref = null;  
	    SignedInfo signedInfo = null;
	    try {
            ref = xmlSigFactory.newReference("", xmlSigFactory.newDigestMethod(DigestMethod.SHA256, null),
                    Collections.singletonList(xmlSigFactory.newTransform(Transform.ENVELOPED,
                    (TransformParameterSpec) null)), null, null);
            signedInfo = xmlSigFactory.newSignedInfo(
                    xmlSigFactory.newCanonicalizationMethod(CanonicalizationMethod.EXCLUSIVE,
                    (C14NMethodParameterSpec) null),
                    xmlSigFactory.newSignatureMethod(SignatureMethod.RSA_SHA1, null),
                    Collections.singletonList(ref));
        } catch (NoSuchAlgorithmException ex) {
            ex.printStackTrace();
        } catch (InvalidAlgorithmParameterException ex) {
            ex.printStackTrace();
        }
	    //KeyInfo keyinfo = getKeyInfo();
	    KeyInfo keyInfo = null;
        KeyValue keyValue = null;
	    KeyInfoFactory keyInfoFact = xmlSigFactory.getKeyInfoFactory();
	    keyValue = keyInfoFact.newKeyValue(publicKey);
	    keyInfo = keyInfoFact.newKeyInfo(Collections.singletonList(keyValue));
	    XMLSignature xmlSignature = xmlSigFactory.newXMLSignature(signedInfo, keyInfo);
	    xmlSignature.sign(domSignCtx);
	}

}
