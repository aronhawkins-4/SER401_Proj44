package com.bharath.trainings.ws;

import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;

import com.bharath.trainings.ws.dto.SumRequest;
import com.bharath.trainings.ws.dto.SumResponse;


@WebService(name = "SumWs")
public interface SumWS {

		@WebResult(name="response")
		SumResponse calculateSum(@WebParam SumRequest request);
}
