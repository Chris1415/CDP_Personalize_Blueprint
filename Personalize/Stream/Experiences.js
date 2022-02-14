function TriggerFullStackExperience(experienceId){
	 var callFlowsContext = {
		 context: {
			 "channel": "WEB",   // update before using. e.g. “WEB”
			 "language": "en",   // update before using. e.g. “en”
			 "currencyCode": "CURRENCY",  // update before using. e.g. “EUR”
			 "pointOfSale": Boxever.pointOfSale, // or value from your data layer
			 "browserId": Boxever.getID(),
			 "clientKey": SITECORECDP_CLIENT_KEY,
			 "friendlyId": experienceId
		 }
	 };

	 Boxever.callFlows(callFlowsContext, function(response) {
		 // Use the data from this response now
		 console.log(response);
	 }, 'json');
}

// Transmit request data with 
"params": {
  "SOMEPROPERTY": SOMEVALUE
}