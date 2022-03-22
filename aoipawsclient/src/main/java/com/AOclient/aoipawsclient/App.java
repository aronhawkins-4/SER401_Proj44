package com.AOclient.aoipawsclient;


public class App 
{
    public static void main( String[] args )
    {
        App app = new App();
       
        app.getCog();
        
    }
    
    private void getCog() {
    	CogProfile getCog = new CogProfile();
    	getCog.displayResponse(getCog.getRequest());
    	
    }
}
