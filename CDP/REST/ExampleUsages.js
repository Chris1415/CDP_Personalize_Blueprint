function SetGuestMembership(email, isMember){
	GetCustomerIdentity(GetCustomerBaseUrlByEmail(email), UpdateGuestData, GetGuestExtension("Kvb"), GetMembershipParams(isMember));
	console.log("Set membership of guest " + email + " to " + isMember);
}