package com.AOclient.aoipawsclient;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.xml.bind.JAXBException;
import javax.xml.namespace.QName;

import org.apache.cxf.endpoint.Client;
import org.apache.cxf.endpoint.Endpoint;
import org.apache.cxf.frontend.ClientProxy;
import org.apache.cxf.headers.Header;
import org.apache.cxf.jaxb.JAXBDataBinding;
import org.apache.cxf.ws.security.wss4j.WSS4JOutInterceptor;
import org.apache.wss4j.dom.handler.WSHandlerConstants;
import org.junit.Test;

import com.AOclient.aoipawsclient.PasswordCallbackHandler;

import services.ipaws.fema.gov.caprequest.RequestParameterList;
import services.ipaws.fema.gov.capresponse.ResponseParameterList;
import services.ipaws.fema.gov.ipaws_capservice.CAPHeaderTypeDef;
import services.ipaws.fema.gov.ipaws_capservice.CAPSoapException;
import services.ipaws.fema.gov.ipaws_capservice.CAPserviceInterface;
import services.ipaws.fema.gov.ipaws_capservice.IPAWS;
import services.ipaws.fema.gov.ipaws_capservice.ObjectFactory;

public class GetRequestTest {

	@Test
	public void getRequestTest() {

		// Create service and set properties
		IPAWS service = new IPAWS();
		System.setProperty("javax.xml.bind.JAXBContext", "com.sun.xml.internal.bind.v2.ContextFactory");
		service.addPort(service.SERVICE, "service2", "https://tdl.integration.aws.fema.gov/IPAWS_CAPService/IPAWS");

		// Create port
		CAPserviceInterface port = service.getIPAWS();

		// Create Client and Dummy Header
		Client client = ClientProxy.getClient(port);
		

		// Create user in in typeDef might not be needed or used correctly
		ObjectFactory of = new ObjectFactory();
		CAPHeaderTypeDef info = of.createCAPHeaderTypeDef();
		info.setLogonCogId(of.createCAPHeaderTypeDefLogonCogId(120075));
		info.setLogonUser(of.createCAPHeaderTypeDefLogonUser("ipawsopen120075"));
		List<Header> headers = new ArrayList<Header>();
		Header dummyHeader;
		try {
			dummyHeader = new Header(new QName("http://gov.fema.ipaws.services/IPAWS_CAPService/", "CAPHeaderTypeDef"), info, new JAXBDataBinding(CAPHeaderTypeDef.class));
			headers.add(dummyHeader);
		} catch (JAXBException e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		}
		// print statement checks to see if value is correct
		System.out.println(info.getLogonCogId().getValue());

		client.getRequestContext().put(Header.HEADER_LIST, headers);
		Endpoint endpoint = client.getEndpoint();

		// Create the request parameters list that will be in the message body
		RequestParameterList list = new RequestParameterList();
		list.setRequestAPI("REQUEST1");
		list.setRequestOperation("getAck");
		
		// print statement to make sure the request is added to the list correctly
		System.out.println(list.getRequestAPI());
		
		
		// Create the outbound interceptors that will hold the security info for the certificate 
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
		
		// Add the interceptors to the endpoint
		endpoint.getOutInterceptors().add(wssOut);

		// Create the response parameter list to check for the response for the outbound request
		ResponseParameterList list2 = new ResponseParameterList();
		
		// Send the request to IPAWS
		try {
			list2 = port.getRequest(list);
			
		} catch (CAPSoapException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		}
		
		// Print out the response to the console
		System.out.println(list2.getParameterListItem().get(0).getParameterName());
		assertEquals(list2.getParameterListItem().get(0).getParameterName(),"ACK");
	}

}
