function Checkout(orderId){
	 _boxeverq.push(function() {
		var checkout = {
			"browser_id": Boxever.getID(),
			"channel": "WEB",
			"type": "CHECKOUT",
			"language": "EN",
			"currency": CURRENCY,
			"page": window.location.pathname,
			"pos": SITECORECDP_POINT_OF_SALE,
			"reference_id": orderId,
			"status": "PURCHASED"
		}

		checkout = Boxever.addUTMParams(checkout);
		Boxever.eventCreate(checkout, function(data){}, 'json');
		console.log('trigger_checkout');
	});
}