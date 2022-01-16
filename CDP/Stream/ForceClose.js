function ForceClose(){
	_boxeverq.push(function () {
		var closeSessionEvent = {
			browser_id: Boxever.getID(),
			channel: "WEB",
			language: "EN",
			currency: CURRENCY,
			pos:SITECORECDP_POINT_OF_SALE,
			type: "FORCE_CLOSE",
			_bx_extended_message: "1"
		};

		Boxever.eventCreate(closeSessionEvent, function (data) { }, 'json');
	});
}
//**********************************************
if (confirm('CLOSE SESSION?')) {
	ForceClose();
}