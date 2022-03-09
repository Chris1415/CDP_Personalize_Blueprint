//******************************************************************
// Identity via CONSTS
//******************************************************************
function Identify(){
	_boxeverq.push(function() {
		var identityEvent = {
			"browser_id": Boxever.getID(),
			"channel": "WEB",
			"type": "IDENTITY",
			"language": "EN",
			"currency": CURRENCY,
			"page": window.location.pathname,
			"pos": SITECORECDP_POINT_OF_SALE,
			"gender": GENDER,
			"firstname": IDENTITY_FNAME,
			"lastname": IDENTITY_LNAME,
			"email" : IDENTITY_EMAIL,
			"dob": DATE_OF_BIRTH,
			"phoneNumber" : IDENTITY_PHONE,
			"identifiers": [{
				"provider": IDENTITY_PROVIDER,
				"id": IDENTITY_ID
			}]
		};
		identityEvent = Boxever.addUTMParams(identityEvent);
		Boxever.eventCreate(identityEvent, function(data){}, 'json');
	})
	console.log('identify event');
}
//******************************************************************
// Identity via Provider Name and ID
//******************************************************************
function Identify(identifier_provider, identifier_id, gender, firstName, lastName, email, dob, phoneNumber, currency){
	_boxeverq.push(function() {
	var identityEvent = {
		"browser_id": Boxever.getID(),
		"channel": "WEB",
		"type": "IDENTITY",
		"language": "EN",
		"currency": currency,
		"page": window.location.pathname,
		"pos": SITECORECDP_POINT_OF_SALE,
		"gender": gender,
		"firstname": firstName,
		"lastname": lastName,
		"email" : email,
		"dob": dob,
		"phoneNumber" : phoneNumber,
		"identifiers": [{
			"provider": identifier_provider,
			"id": identifier_id
		}]
	};
	identityEvent = Boxever.addUTMParams(identityEvent);
	Boxever.eventCreate(identityEvent, function(data){}, 'json');
})}
//******************************************************************
// Identity via Email
//******************************************************************
function Identify(gender, firstName, lastName, email, dob, phoneNumber, currency){
	_boxeverq.push(function() {
	var identityEvent = {
		"browser_id": Boxever.getID(),
		"channel": "WEB",
		"type": "IDENTITY",
		"language": "EN",
		"currency": currency,
		"page": window.location.pathname,
		"pos": SITECORECDP_POINT_OF_SALE,
		"gender": gender,
		"firstname": firstName,
		"lastname": lastName,
		"email" : email,
		"dob": dob,
		"phoneNumber" : phoneNumber,
	};
	identityEvent = Boxever.addUTMParams(identityEvent);
	Boxever.eventCreate(identityEvent, function(data){}, 'json');
})}
//******************************************************************
// Identity with custom Properties in Event
//******************************************************************
function Identify(identifier_provider, identifier_id, gender, firstName, lastName, email, dob, phoneNumber, currency){
	_boxeverq.push(function() {
	var identityEvent = {
		"browser_id": Boxever.getID(),
		"channel": "WEB",
		"type": "IDENTITY",
		"language": "EN",
		"currency": currency,
		"page": window.location.pathname,
		"pos": SITECORECDP_POINT_OF_SALE,
		"gender": gender,
		"firstname": firstName,
		"lastname": lastName,
		"email" : email,
		"dob": dob,
		"phoneNumber" : phoneNumber,
		"identifiers": [{
			"provider": identifier_provider,
			"id": identifier_id
		}],
		"extensions":[
			{
				"name":"ext",
				"key":"SOMENAME",
				"SOMEPROPERTY":true,
			}
		]
	};
	identityEvent = Boxever.addUTMParams(identityEvent);
	Boxever.eventCreate(identityEvent, function(data){}, 'json');
})}
//******************************************************************
