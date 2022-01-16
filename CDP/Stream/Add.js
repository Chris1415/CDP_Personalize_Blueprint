 function Add(itemId, productId, name, currency, price, category, orderId){
	 _boxeverq.push(function() {
		var addEvent = {
			"browser_id": Boxever.getID(),
			"channel": "WEB",
			"type": "ADD",
			"language": "EN",
			"currency": currency,
			"page": window.location.pathname,
			"pos": SITECORECDP_POINT_OF_SALE,
			"product":{
				"type": category,
				"item_id": itemId,
				"name": name,
				"currency": currency,
				"price": price,
				"product_id": productId,
				"referenceId":orderId
			}
		};
		// product_id -> Customer related Product ID
		// item_id -> CDP related Product ID
		addEvent = Boxever.addUTMParams(addEvent);
		Boxever.eventCreate(addEvent, function(data){}, 'json');
		console.log('trigger_add');
	 });
 }