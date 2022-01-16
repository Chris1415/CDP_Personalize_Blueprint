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