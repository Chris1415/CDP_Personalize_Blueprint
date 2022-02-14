// Adds a unique variant identifier to CSS when deployed to ensure CSS does not impact styling of other elements.
var compiledCSS = Boxever.templating.compile(variant.assets.css)(variant);
var styleTag = document.getElementById('style-' + variant.ref);
if (styleTag) {
    styleTag.innerHTML = compiledCSS;
}
// End Adds a unique variant identifier to CSS when deployed to ensure CSS does not impact styling of other elements.

// make space in the body for the experience
insertHTMLBefore("section--1");
var bxContent = document.querySelector("#section--111");

setTimeout(function() {
    bxContent.style.display = "block";
    sendInteractionToBoxever("VIEWED");
});

var bxCardClose = document.body.querySelector("#bx-"+variant.ref+ " #bx-transition-card--secondary");
bxCardClose.onclick = function() {
    sendInteractionToBoxever("DISMISSED");
    sessionStorage.setItem("FEEDBACK_POPUP_SEEN", true);
    bxContent.style.display = "none";
}

var bxCardCta = bxContent.querySelector("#bx-"+variant.ref+ " #bx-transition-card--primary");
bxCardCta.onclick = function() {
    if(rating == -1){
        messageElement.innerText = "[[Not filled Message | string | Please give a rating| {required:true, group: Validation, order: 1}]]" 
        return;
    }
    
    console.log("CLICKED");
    sendInteractionToBoxever("CLICKED");
    CustomEvent("FEEDBACK-"+ rating);
    sessionStorage.setItem("FEEDBACK_POPUP_SEEN", true);
    window.location.href = "[[CTA destination URL | string || {required:true, group: CTA Button}]]";
}

function sendInteractionToBoxever(interactionType) {
    var eventToSent = {
        "channel": "WEB",
        "type": "[[ Experience ID | String | CORNER_POPUP | {required: true}]]_INTERACTION",
        "pos": window._boxever_settings.pointOfSale,
        "browser_id": Boxever.getID(),
        "interactionID":"BX_CORNER_POPUP",
        "interactionType": interactionType
    };
    Boxever.eventCreate(eventToSent, function (data) { }, 'json');
}

function CustomEvent(eventName){
    _boxeverq.push(function() {
        var customEvent = {
            "browser_id": Boxever.getID(),
            "channel": "WEB",
            "type": eventName,
            "page": window.location.pathname,
            "pos": window._boxever_settings.pointOfSale
        };
        customEvent = Boxever.addUTMParams(customEvent);
        Boxever.eventCreate(customEvent, function(data){}, 'json');
        console.log('triggered ' + eventName);
    });
}

var messageElement = document.getElementById("message");
var rating = -1;
var starButtons = document.getElementsByClassName("star_button");
for (var i = 0; i < starButtons.length; i++) {
    starButtons[i].addEventListener('click', function(){
        rating = this.getAttribute("value");
         messageElement.innerText = "";
    }, false);
}
