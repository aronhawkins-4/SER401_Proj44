package com.bharath.trainings.ws.sumwsclient;

import static org.junit.Assert.*;

import java.net.MalformedURLException;
import java.net.URL;

import org.junit.Test;

import com.bharath.trainings.ws.SumRequest;
import com.bharath.trainings.ws.SumResponse;
import com.bharath.trainings.ws.SumWSService;
import com.bharath.trainings.ws.SumWs;

public class SumWsTest {

	@Test
	public void calculateSumShouldReturnValidResult() {
		try {
			SumWSService service = new SumWSService(new URL("http://localhost:8080/sumws/services/sumService?wsdl"));
			SumWs port = service.getSumWsPort();
			SumRequest request = new SumRequest();
			request.setNum1(10);
			request.setNum2(20);
			SumResponse response = port.calculateSum(request);
			assertNotNull(response);
			assertEquals(30, response.getResult());
			
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
