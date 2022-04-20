package com.AOclient.aoipawsclient;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.UnknownHostException;

import org.apache.wss4j.common.ext.WSSecurityException;
import org.json.simple.JSONObject;

import services.ipaws.fema.gov.capresponse.ResponseParameterList;

public class App {
	public static void main(String[] args) throws Exception {

		int portNumber = 8080;
		BufferedReader in;
		PrintWriter out;
		ServerSocket serverSocket;
		Socket clientSocket;
		
		String cogProfile = "";
		String postResponse ="";
		App app = new App();

		serverSocket = new ServerSocket(portNumber);
		while(true) {
		clientSocket = serverSocket.accept();
		System.out.println("Connected to AO APP");
		out = new PrintWriter(clientSocket.getOutputStream(), true);
		in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
		String userInput = "";
		out.write("Waiting for request");

		out.flush();
		userInput = in.readLine();
		System.out.println("recieved" + cogProfile);
		System.out.println(userInput);
		if (userInput.equals("getCogProfile")) {
			cogProfile = app.getCog();
			System.out.println("sending response");
			System.out.println(cogProfile);
			out.write(cogProfile);
			out.flush();
		}
		else if(userInput.equals("postCAP")) {
			postResponse = app.postCAP();
			System.out.println("posting CAP message");
			System.out.println(postResponse);
			out.write(postResponse);
			out.flush();
		}
		clientSocket.close();
		}
	}

	private String getCog() {
		CogProfile getCog = new CogProfile();
		ResponseParameterList response = getCog.getRequest();
		getCog.displayResponse(response);
		String cogProfile = getCog.writeResponse(response);
		return cogProfile;
	}
	
	private String postCAP() {
		PostCAP postCAP = new PostCAP();
		String response = "";
		try {
			response = postCAP.sendAlert();
		} catch (WSSecurityException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(response);
		return response;
	}
}
