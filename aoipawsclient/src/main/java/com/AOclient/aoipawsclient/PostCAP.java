package com.AOclient.aoipawsclient;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.StringReader;
import java.io.StringWriter;
import java.security.InvalidAlgorithmParameterException;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.UnrecoverableEntryException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Properties;
import java.util.stream.Collectors;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import javax.xml.crypto.MarshalException;
import javax.xml.crypto.dsig.CanonicalizationMethod;
import javax.xml.crypto.dsig.DigestMethod;
import javax.xml.crypto.dsig.Reference;
import javax.xml.crypto.dsig.SignedInfo;
import javax.xml.crypto.dsig.Transform;
import javax.xml.crypto.dsig.XMLSignature;
import javax.xml.crypto.dsig.XMLSignatureException;
import javax.xml.crypto.dsig.XMLSignatureFactory;
import javax.xml.crypto.dsig.dom.DOMSignContext;
import javax.xml.crypto.dsig.keyinfo.KeyInfo;
import javax.xml.crypto.dsig.keyinfo.KeyInfoFactory;
import javax.xml.crypto.dsig.keyinfo.X509Data;
import javax.xml.crypto.dsig.spec.C14NMethodParameterSpec;
import javax.xml.crypto.dsig.spec.TransformParameterSpec;
import javax.xml.namespace.QName;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.soap.MessageFactory;
import javax.xml.soap.SOAPBody;
import javax.xml.soap.SOAPBodyElement;
import javax.xml.soap.SOAPConnection;
import javax.xml.soap.SOAPConnectionFactory;
import javax.xml.soap.SOAPElement;
import javax.xml.soap.SOAPEnvelope;
import javax.xml.soap.SOAPException;
import javax.xml.soap.SOAPHeader;
import javax.xml.soap.SOAPMessage;
import javax.xml.soap.SOAPPart;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.apache.cxf.endpoint.Client;
import org.apache.cxf.endpoint.Endpoint;
import org.apache.cxf.frontend.ClientProxy;
import org.apache.cxf.headers.Header;
import org.apache.cxf.jaxb.JAXBDataBinding;
import org.apache.cxf.ws.security.wss4j.WSS4JOutInterceptor;
import org.apache.wss4j.common.crypto.Crypto;
import org.apache.wss4j.common.crypto.CryptoFactory;
import org.apache.wss4j.common.ext.WSSecurityException;
import org.apache.wss4j.dom.WSConstants;
import org.apache.wss4j.dom.handler.WSHandlerConstants;
import org.apache.wss4j.dom.message.WSSecHeader;
import org.apache.wss4j.dom.message.WSSecSignature;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import oasis.names.tc.emergency.cap._1.Alert;
import services.ipaws.fema.gov.capresponse.ResponseParameterList;
import services.ipaws.fema.gov.ipaws_capservice.CAPHeaderTypeDef;
import services.ipaws.fema.gov.ipaws_capservice.CAPSoapException;
import services.ipaws.fema.gov.ipaws_capservice.CAPserviceInterface;
import services.ipaws.fema.gov.ipaws_capservice.IPAWS;
import services.ipaws.fema.gov.ipaws_capservice.PostCAPRequestTypeDef;

public class PostCAP {

	private String messageXmlFilePath = "temp.xml";
	private String keyFilePath = "/keystore/IPAWSOPEN120075.jks";
	private String soapEndpointUrl = "https://tdl.integration.aws.fema.gov/IPAWS_CAPService/IPAWS";
	private String soapAction = "https://gov.fema.ipaws.services/IPAWS_CAPService/postCAP";

	PostCAP() {

		this.messageXmlFilePath = messageXmlFilePath;
		this.keyFilePath = keyFilePath;
		this.soapEndpointUrl = soapEndpointUrl;
		this.soapAction = soapAction;
	}

	public Document readXML(String xmlFilePath) {
		Document doc = null;
        DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
        dbf.setNamespaceAware(true);
		InputStream is = getClass().getClassLoader().getResourceAsStream(xmlFilePath);
		InputStreamReader isReader = new InputStreamReader(is);
		BufferedReader reader = new BufferedReader(isReader);
       StringBuffer sb = new StringBuffer();
        String str = "";
       try{
		while((str = reader.readLine())!= null){
         sb.append(str);
      }
	} catch (IOException e){
		e.printStackTrace();
	}
	System.out.println(sb.toString());
        try {
            doc = dbf.newDocumentBuilder().parse(new InputSource(new StringReader(sb.toString())));
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
	

	public String sendAlert() throws WSSecurityException {
		System.setProperty("javax.xml.bind.JAXBContext", "com.sun.xml.internal.bind.v2.ContextFactory");
		// Step 1: Get, clean and sign the XML
		Document doc = readXML(getMessageXmlFilePath());
		
		// Create a DOM XMLSignatureFactory that will be used to
		// generate the enveloped signature.
		XMLSignatureFactory fac = XMLSignatureFactory.getInstance("DOM");

		// Remove linebreaks and spaces from XML file
		StringWriter writer = new StringWriter();

		TransformerFactory transFactory = TransformerFactory.newInstance();
		Transformer trans = null;
		try {
			trans = transFactory.newTransformer();
		} catch (TransformerConfigurationException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		try {
			trans.transform(new DOMSource(doc), new StreamResult(writer));
		} catch (TransformerException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		String str = writer.toString().replaceAll( ">[\\s\\r\\n]*<", "><");
		str = str.replace(System.getProperty("line.separator"), "");

		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		DocumentBuilder docBuilder = null;
		// Create DocumentBuilder with default configuration
		try {
			docBuilder = factory.newDocumentBuilder();
		} catch (ParserConfigurationException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		// Parse the content to Document object
		try {
			doc = docBuilder.parse(new InputSource(new StringReader(str)));
		} catch (SAXException | IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		
		// Create a Reference to the enveloped document (in this case,
		// you are signing the whole document, so a URI of "" signifies
		// that, and also specify the SHA256 digest algorithm and
		// the ENVELOPED Transform.
		Reference ref = null;
		try {
			ref = fac.newReference("", fac.newDigestMethod(DigestMethod.SHA256, null),
					Collections.singletonList(fac.newTransform(Transform.ENVELOPED, (TransformParameterSpec) null)),
					null, null);
		} catch (NoSuchAlgorithmException | InvalidAlgorithmParameterException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// Create the SignedInfo.
		SignedInfo si = null;
		try {
			si = fac.newSignedInfo(
					fac.newCanonicalizationMethod(CanonicalizationMethod.EXCLUSIVE, (C14NMethodParameterSpec) null),
					fac.newSignatureMethod("http://www.w3.org/2001/04/xmldsig-more#rsa-sha256", null),
					Collections.singletonList(ref));
		} catch (NoSuchAlgorithmException | InvalidAlgorithmParameterException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		char[] pwdArray = "KPO0$o7eaa".toCharArray();
		char[] prvtKey = "PK#4Pzzg5w".toCharArray();
		KeyStore ks = null;

		try {
			ks = KeyStore.getInstance("JKS");
		} catch (KeyStoreException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			InputStream stream=this.getClass().getResourceAsStream(getkeyFilePath()) ;
			ks.load(stream, pwdArray);
		} catch (NoSuchAlgorithmException | CertificateException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		KeyStore.PrivateKeyEntry keyEntry = null;
		try {
			keyEntry = (KeyStore.PrivateKeyEntry) ks.getEntry("ipawsopen120075",
					new KeyStore.PasswordProtection(prvtKey));
		} catch (NoSuchAlgorithmException | UnrecoverableEntryException | KeyStoreException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		X509Certificate cert = (X509Certificate) keyEntry.getCertificate();

		// Create the KeyInfo containing the X509Data.
		KeyInfoFactory kif = fac.getKeyInfoFactory();
		List x509Content = new ArrayList();
		x509Content.add(cert.getSubjectX500Principal().getName());
		x509Content.add(cert);
		X509Data xd = kif.newX509Data(x509Content);
		KeyInfo ki = kif.newKeyInfo(Collections.singletonList(xd));
		// Instantiate the document to be signed.

		// Create a DOMSignContext and specify the RSA PrivateKey and
		// location of the resulting XMLSignature's parent element.
		DOMSignContext dsc = new DOMSignContext(keyEntry.getPrivateKey(), doc.getDocumentElement());

		// Create the XMLSignature, but don't sign it yet.
		XMLSignature signature = fac.newXMLSignature(si, ki);
		
		//DOMSource sourceDoc = new DOMSource(doc);
		//System.out.println(doc.getXmlStandalone());
		
		// Marshal, generate, and sign the enveloped signature.
		try {
			signature.sign(dsc);
		} catch (MarshalException | XMLSignatureException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			OutputStream os = new FileOutputStream("rawsignedcap.xml");
			TransformerFactory tf = TransformerFactory.newInstance();
			Transformer trans1 = tf.newTransformer();
			//trans1.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, "yes");
			trans1.setOutputProperty(OutputKeys.INDENT, "no");
			trans1.transform(new DOMSource(doc), new StreamResult(os));
		} catch (FileNotFoundException e3) {
			// TODO Auto-generated catch block
			e3.printStackTrace();
		} catch (TransformerException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Alert alertResult = null;
		
		try {
			JAXBContext context = JAXBContext.newInstance(Alert.class);
			Unmarshaller unMarshaller = context.createUnmarshaller();
			alertResult = (Alert) unMarshaller.unmarshal(new FileInputStream("rawsignedcap.xml"));
			Marshaller marshaller = context.createMarshaller();
			StringWriter stWriter = new StringWriter();
			marshaller.marshal(alertResult, stWriter);
			System.out.println(stWriter.toString());
		} catch (JAXBException | FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// Step 2: Create soap message and add headers

		IPAWS service = new IPAWS();
		// Create port
		CAPserviceInterface port = service.getIPAWS();
		service.addPort(service.SERVICE, "service2", "http://localhost:8081/test");
		// Create Client and Dummy Header
		Client client = ClientProxy.getClient(port);
		
		// Create CAPHeadertypeDef object to be used in header
		services.ipaws.fema.gov.ipaws_capservice.ObjectFactory of = new services.ipaws.fema.gov.ipaws_capservice.ObjectFactory();
		CAPHeaderTypeDef info = of.createCAPHeaderTypeDef();
		info.setLogonCogId(of.createCAPHeaderTypeDefLogonCogId(120075));
		info.setLogonUser(of.createCAPHeaderTypeDefLogonUser("ipawsopen120075"));

		// Create and Add header to client
		List<Header> headers = new ArrayList<Header>();
		Header dummyHeader;
		try {
			dummyHeader = new Header(new QName("http://gov.fema.ipaws.services/IPAWS_CAPService/", "CAPHeaderTypeDef"),
					info, new JAXBDataBinding(CAPHeaderTypeDef.class));
			headers.add(dummyHeader);
		} catch (JAXBException e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		}
		client.getRequestContext().put(Header.HEADER_LIST, headers);
		Endpoint endpoint = client.getEndpoint();
		
		HashMap<String, Object> outProps = new HashMap<>();
		outProps.put(WSHandlerConstants.ACTION, WSHandlerConstants.SIGNATURE + " ");
		outProps.put(WSHandlerConstants.USER, "ipawsopen120075");
		outProps.put(WSHandlerConstants.PW_CALLBACK_CLASS, PasswordCallbackHandler.class.getName());
		outProps.put(WSHandlerConstants.SIG_PROP_FILE, "etc/clientKeystore.properties");
		outProps.put(WSHandlerConstants.SIG_KEY_ID, "DirectReference");
		outProps.put(WSHandlerConstants.SIG_DIGEST_ALGO, "http://www.w3.org/2001/04/xmlenc#sha256");
		outProps.put(WSHandlerConstants.SIG_ALGO, "http://www.w3.org/2001/04/xmldsig-more#rsa-sha256");
		outProps.put(WSHandlerConstants.SIG_C14N_ALGO, "http://www.w3.org/2001/10/xml-exc-c14n#");
		outProps.put(WSHandlerConstants.SIGNATURE_USER, "ipawsopen120075");
		
		WSS4JOutInterceptor wssOut = new WSS4JOutInterceptor(outProps);
		
		endpoint.getOutInterceptors().add(wssOut);
		
		PostCAPRequestTypeDef request = new PostCAPRequestTypeDef();
		
		request.setAlert(alertResult);
		
		ResponseParameterList response = new ResponseParameterList();

		try {
			response = port.postCAP(request);
		} catch (CAPSoapException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		 String strResponse = "";
		 try {
				JAXBContext context2 = JAXBContext.newInstance(ResponseParameterList.class);
				
				Marshaller marshaller2 = context2.createMarshaller();
				StringWriter stWriter2 = new StringWriter();
				marshaller2.marshal(of.createPostCAPResponseTypeDef(response), stWriter2);
				System.out.println(stWriter2.toString());
				strResponse = stWriter2.toString();
			} catch (JAXBException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	
		 System.out.println(strResponse);
		return strResponse;

	}

	public String getMessageXmlFilePath() {
		return messageXmlFilePath;
	}

	public String getkeyFilePath() {
		return keyFilePath;
	}

	public String getSoapEndpointUrl() {
		return soapEndpointUrl;
	}

	public String getSoapAction() {
		return soapAction;
	}

}
