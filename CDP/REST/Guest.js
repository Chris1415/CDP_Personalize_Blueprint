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