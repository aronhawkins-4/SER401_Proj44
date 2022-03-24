package com.AOclient.aoipawsclient;

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

import services.ipaws.fema.gov.caprequest.RequestParameterList;
import services.ipaws.fema.gov.capresponse.ResponseParameterList;
import services.ipaws.fema.gov.ipaws_capservice.CAPHeaderTypeDef;
import services.ipaws.fema.gov.ipaws_capservice.CAPSoapException;
import services.ipaws.fema.gov.ipaws_capservice.CAPserviceInterface;
import services.ipaws.fema.gov.ipaws_capservice.IPAWS;
import services.ipaws.fema.gov.ipaws_capservice.ObjectFactory;

public class CogProfile {
	private String requestAPI;
	private String requestOperation;

	CogProfile() {
		this.requestAPI = "REQUEST1";
		this.requestOperation = "getCOGProfile";
	}

	public String getRequestAPI() {
		return requestAPI;
	}

	public String getRequestOperation() {
		return requestOperation;
	}

	public ResponseParameterList getRequest() {

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
			dummyHeader = new Header(new QName("http://gov.fema.ipaws.services/IPAWS_CAPService/", "CAPHeaderTypeDef"),
					info, new JAXBDataBinding(CAPHeaderTypeDef.class));
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
		RequestParameterList request = new RequestParameterList();
		request.setRequestAPI(getRequestAPI());
		request.setRequestOperation(getRequestOperation());
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

		// Create the response parameter list to check for the response for the outbound
		// request
		ResponseParameterList response = new ResponseParameterList();

		// Send the request to IPAWS
		try {
			response = port.getRequest(request);

		} catch (CAPSoapException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();

		}
		return response;
	}

	public void displayResponse(ResponseParameterList response) {
		//display 8 main fields
		for (int i = 0; i<response.getParameterListItem().size()-2;i++) {
			System.out.print(response.getParameterListItem().get(i).getParameterName() + ": ");
			System.out.print(response.getParameterListItem().get(i).getParameterValue());
			System.out.println();
		}
		
		//display all eventCodes
		System.out.println(response.getParameterListItem().get(8).getParameterName());
		for(int i = 0; i<response.getParameterListItem().get(8).getSubParaListItem().size();i++) {
			System.out.print(response.getParameterListItem().get(8).getSubParaListItem().get(i).getSubParameterName() + ": ");
			System.out.print(response.getParameterListItem().get(8).getSubParaListItem().get(i).getSubParameterValue());
			System.out.println();
		}
		
		//display all geoCodes
		System.out.println(response.getParameterListItem().get(9).getParameterName());
		for(int i = 0; i<response.getParameterListItem().get(9).getSubParaListItem().size();i++) {
			System.out.print(response.getParameterListItem().get(9).getSubParaListItem().get(i).getSubParameterName() + ": ");
			System.out.print(response.getParameterListItem().get(9).getSubParaListItem().get(i).getSubParameterValue());
			System.out.println();
		}
	}
	
	public void writeResponse(ResponseParameterList response) {
		JSONObject cogProfile = new JSONObject();
		JSONObject eventCodes = new JSONObject();
		JSONObject geoCodes = new JSONObject();
		//obj.put("COGPROFILE", "stuff");
		JSONArray list = new JSONArray();
		
		for (int i = 0; i<response.getParameterListItem().size()-2;i++) {
		JSONObject obj = new JSONObject();
		obj.put(response.getParameterListItem().get(i).getParameterName(),
					response.getParameterListItem().get(i).getParameterValue());
		list.add(obj);	
		}
		
		//System.out.println(list.toJSONString());
		JSONArray eventCodesList = new JSONArray();
		for(int i = 0; i<response.getParameterListItem().get(8).getSubParaListItem().size();i++) {
			JSONObject obj = new JSONObject();
			obj.put(response.getParameterListItem().get(8).getSubParaListItem().get(i).getSubParameterName(),
					response.getParameterListItem().get(8).getSubParaListItem().get(i).getSubParameterValue());
			eventCodesList.add(obj);
		}
		eventCodes.put("event codes", eventCodesList);
		list.add(eventCodes);
		
		JSONArray geoCodesList = new JSONArray();
		for(int i = 0; i<response.getParameterListItem().get(9).getSubParaListItem().size();i++) {
			JSONObject obj = new JSONObject();
			obj.put(response.getParameterListItem().get(9).getSubParaListItem().get(i).getSubParameterName(),
				response.getParameterListItem().get(9).getSubParaListItem().get(i).getSubParameterValue());
			geoCodesList.add(obj);
			}
		geoCodes.put("geo codes", geoCodesList);
		list.add(geoCodes);
		cogProfile.put("CogProfile", list);
		try {
	         FileWriter file = new FileWriter("output.json");
	         file.write(cogProfile.toJSONString());
	         file.close();
	      } catch (IOException e) {
	         // TODO Auto-generated catch block
	         e.printStackTrace();
	      }
	      System.out.println("JSON file created: " + cogProfile);
	   
		System.out.println(cogProfile.toJSONString());
	}
}
