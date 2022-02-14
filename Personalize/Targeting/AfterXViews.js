// Use client-side JavaScript to more specifically target users
// NOTE: When your targeting conditions are met you must call targetingPassed() 

(function () {
  var alreadySeen = sessionStorage.getItem("FEEDBACK_POPUP_SEEN");
  var numberVisits = sessionStorage.getItem("NUMBER_VIEWS");
  if(!alreadySeen && numberVisits >= 3){
      targetingPassed() 
  }
})();

#######################################
In Tampermonkey use something like this
#######################################
 function IncreaseViewCounter(){
	var numberViews = sessionStorage.getItem("NUMBER_VIEWS");
	var parsedNumberViews = parseInt(numberViews);
	if(parsedNumberViews){
		parsedNumberViews +=1;
	}
	else{
		parsedNumberViews = 1;
	}
	sessionStorage.setItem("NUMBER_VIEWS", parsedNumberViews);
}

#######################################
In Web Experience JS code use something like this on interaction
#######################################
sessionStorage.setItem("FEEDBACK_POPUP_SEEN", true);

example
var bxCardClose = document.body.querySelector("#bx-"+variant.ref+ " #bx-transition-card--secondary");
bxCardClose.onclick = function() {
    sendInteractionToBoxever("DISMISSED");
    sessionStorage.setItem("FEEDBACK_POPUP_SEEN", true);
    bxContent.classList.remove("open");
}