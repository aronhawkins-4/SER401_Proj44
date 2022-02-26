package com.AOclient.aoipawsclient;

import static org.junit.Assert.*;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.cert.CertificateException;

import javax.xml.crypto.dsig.Reference;
import javax.xml.crypto.dsig.SignedInfo;
import javax.xml.crypto.dsig.XMLSignatureFactory;
import javax.xml.crypto.dsig.dom.DOMSignContext;
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
		String originalXmlFilePath = "src/test/java/test.xml";
		String destnSignedXmlFilePath = "src/test/java/finish.xml";
		String privateKeyFilePath = "src/main/resources/keystore/IPAWSOPEN120075.jks";
		String publicKeyFilePath = "src/main/resources/keystore/IPAWSOPEN120075.jks";
		KeyStore ks = KeyStore.getInstance("JKS");
		Document doc = getXmlDocument(originalXmlFilePath);
		char[] pwdArray = "KPO0$o7eaa".toCharArray();
		ks.load(new FileInputStream("newKeyStoreFileName.jks"), pwdArray);
		System.out.println(ks.aliases());
		XMLSignatureFactory xmlSigFactory = XMLSignatureFactory.getInstance("DOM");  
	    PrivateKey privateKey = new KryptoUtil().getStoredPrivateKey(privateKeyFilePath);
	    DOMSignContext domSignCtx = new DOMSignContext(privateKey, doc.getDocumentElement());  
	    Reference ref = null;  
	    SignedInfo signedInfo = null;
	}

}
