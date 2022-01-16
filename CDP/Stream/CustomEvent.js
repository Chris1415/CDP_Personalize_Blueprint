function CustomEvent(eventName){
	  _boxeverq.push(function() {
		var customEvent = {
			"browser_id": Boxever.getID(),
			"channel": "WEB",
			"type": eventName,
			"language": "EN",
			"page": window.location.pathname,
			"pos": SITECORECDP_POINT_OF_SALE
		};
		customEvent = Boxever.addUTMParams(customEvent);
		Boxever.eventCreate(customEvent, function(data){}, 'json');
		console.log('triggered ' + eventName);
	});
}