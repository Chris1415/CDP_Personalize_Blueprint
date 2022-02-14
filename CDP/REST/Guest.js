// REST via JS
function GetCustomerIdentity(url, callback, relPart){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.withCredentials = false;
	xhr.setRequestHeader("Authorization", 'Basic ' + btoa(SITECORECDP_CLIENT_KEY+':'+SITECORECDP_CLIENT_SECRET));
	xhr.onload = function () {
		var jsonResponse = JSON.parse(xhr.responseText);
		callback(jsonResponse.items[0].href, relPart);
	};
	xhr.send();
}

function UpdateGuestData(baseUrl, relativePart, params){
	var url = baseUrl + relativePart;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.withCredentials = false;
	xhr.setRequestHeader("Authorization", 'Basic ' + btoa(SITECORECDP_CLIENT_KEY+':'+SITECORECDP_CLIENT_SECRET));
	xhr.onload = function () {
		console.log(xhr.responseText);
	};
	xhr.send(JSON.stringify(params));
}

// Helper 
function GetCustomerBaseUrlByIdentityId(identity_id, identity_provider){
	return "https://api.boxever.com/v2/guests/?identifiers.id="+identity_id + "&identifiers.provider="+identity_provider;
}

function GetCustomerBaseUrlByEmail(email){
	return "https://api.boxever.com/v2/guests/?email="+email;
}

function GetGuestExtension(extensionName){
	return "/ext" + extensionName;
}

function GetGuestExtensionParams(groupName, propertyName, propertyValue){
	return {
		key: groupName,
		propertyName: propertyValue
	}
}

// Example Usage
function SetGuestMembership(email, isMember){
	GetCustomerIdentity(GetCustomerBaseUrlByEmail(email), UpdateGuestData, GetGuestExtension("Kvb"), GetMembershipParams(isMember));
}