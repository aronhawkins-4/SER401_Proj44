package com.AOclient.aoipawsclient;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;

import javax.xml.bind.JAXBException;
import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;
import javax.xml.namespace.QName;

import org.apache.cxf.endpoint.Client;
import org.apache.cxf.endpoint.Endpoint;
import org.apache.cxf.frontend.ClientProxy;
import org.apache.cxf.headers.Header;
import org.apache.cxf.jaxb.JAXBDataBinding;
import org.apache.cxf.ws.security.wss4j.WSS4JOutInterceptor;
import org.apache.wss4j.dom.handler.WSHandlerConstants;
import org.junit.Test;

import oasis.names.tc.emergency.cap._1.Alert;
import oasis.names.tc.emergency.cap._1.Alert.Info;
import oasis.names.tc.emergency.cap._1.Alert.Info.Area;
import oasis.names.tc.emergency.cap._1.Alert.Info.EventCode;
import oasis.names.tc.emergency.cap._1.ObjectFactory;

import services.ipaws.fema.gov.capresponse.ResponseParameterList;
import services.ipaws.fema.gov.ipaws_capservice.CAPHeaderTypeDef;
import services.ipaws.fema.gov.ipaws_capservice.CAPSoapException;
import services.ipaws.fema.gov.ipaws_capservice.CAPserviceInterface;
import services.ipaws.fema.gov.ipaws_capservice.IPAWS;
import services.ipaws.fema.gov.ipaws_capservice.PostCAPRequestTypeDef;
//import services.ipaws.fema.gov.ipaws_capservice.ObjectFactory;

public class PostCAPTest {

	@Test
	public void test() throws DatatypeConfigurationException, CAPSoapException {
		IPAWS service = new IPAWS();
		System.setProperty("javax.xml.bind.JAXBContext", "com.sun.xml.internal.bind.v2.ContextFactory");
		
		service.addPort(service.SERVICE, "service2", "https://tdl.integration.aws.fema.gov/IPAWS_CAPService/IPAWS");

		// Create port
		CAPserviceInterface port = service.getIPAWS();

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
		// print statement checks to see if value is correct

		client.getRequestContext().put(Header.HEADER_LIST, headers);
		Endpoint endpoint = client.getEndpoint();
		final GregorianCalendar now = new GregorianCalendar();
		// now.set(2022, 02, 13, 3, 27, 20);
		XMLGregorianCalendar value = DatatypeFactory.newInstance().newXMLGregorianCalendar(now);

		// Create the request parameters list that will be in the message body
		Alert fields = new Alert();
		fields.setIdentifier("202111281234373229666WAS");
		fields.setSender("jkalafus@asu.edu");
		fields.setSent(value);
		fields.setStatus("Actual");
		fields.setMsgType("Alert");
		fields.setStatus("Actual");
		fields.setScope("Public");
		fields.getCode().add("IPAWSv1.0");
		Info infoFields = new Info();
		infoFields.setLanguage("en-US");
		infoFields.getCategory().add("Geo");
		infoFields.setEvent("Some bad stuff");
		infoFields.setUrgency("Immediate");
		infoFields.setSeverity("Extreme");
		infoFields.setCertainty("Observed");
		infoFields.getArea().add(0, null);
		ObjectFactory pof = new ObjectFactory();
		EventCode infoEventCode = pof.createAlertInfoEventCode();
		infoEventCode.setValueName("ADR");
		infoEventCode.setValue("SAME");
		infoFields.getEventCode().add(infoEventCode);
		Area area = pof.createAlertInfoArea();
		area.setAreaDesc("LA");
		infoFields.getArea().add(area);

		fields.getInfo().add(infoFields);
		// Create the outbound interceptors that will hold the security info for the
		// certificate
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
		PostCAPRequestTypeDef request = new PostCAPRequestTypeDef();

		request.setAlert(fields);
		// Create the response parameter list to check for the response for the outbound
		// request

		ResponseParameterList response = new ResponseParameterList();

		response = port.postCAP(request);
		for (int i = 0; i < response.getParameterListItem().size(); i++) {
			System.out.println(response.getParameterListItem().get(0).getParameterName());
			System.out.println(response.getParameterListItem().get(0).getParameterValue());
			for (int j = 0; j < response.getParameterListItem().get(i).getSubParaListItem().size(); j++) {
				System.out.println(
						response.getParameterListItem().get(i).getSubParaListItem().get(j).getSubParameterName());
				System.out.println(
						response.getParameterListItem().get(i).getSubParaListItem().get(j).getSubParameterValue());
			}
		}
	}

}
