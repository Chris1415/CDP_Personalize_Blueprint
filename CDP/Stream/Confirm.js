function Confirm(itemId){
	_boxeverq.push(function() {
		var confirmEvent = {
			"browser_id": Boxever.getID(),
			"channel": "WEB",
			"type": "CONFIRM",
			"language": "EN",
			"currency": CURRENCY,
			"page": window.location.pathname,
			"pos": SITECORECDP_POINT_OF_SALE,
			"product": [{
				"item_id": itemId	
			}]
		}
		confirmEvent = Boxever.addUTMParams(confirmEvent);
		Boxever.eventCreate(confirmEvent, function(data){}, 'json');
		console.log('trigger_confirm');
	});
}