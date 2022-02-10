// ==UserScript==
// @name Sitecore CDP Blueprint
// @namespace http://tampermonkey.net/
// @version 0.2
// @description Generic Load Sitecore CDP Tampermonkey scripts
// @author Brian Bishop
// @match https://www.*.de/*
// @grant  none
// ==/UserScript==

(function() {
    'use strict';
    // *********************************
    // CONSTS
    // *********************************
    const SITECORECDP_CLIENT_KEY = "";  // spinair dc tenant - do not change
    const SITECORECDP_CLIENT_SECRET = "";
    const SITECORECDP_REST_API_BASIC_AUTH = "" //spinair dc tenant only - do not change
    const SITECORECDP_POINT_OF_SALE = "StandardDemo"; //  do not change
    const SITECORECDP_API_TARGET = "https://api.boxever.com/v1.2"; //  do not change
    const SITECORECDP_WEB_FLOW_TARGET = "https://d35vb5cccm4xzp.cloudfront.net"; //  do not change
    const SITECORECDP_JS_LIB_SRC = "https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.1.min.js"; //  do not change
    const SITECORECDP_COOKIE_DOMAIN = '*.PUTYOURTLDHERE.de'; //replace TLD with your client/prospect
    const IDENTITY_EMAIL = "christian.hahn@sitecore.com"; // must be unique, ideally under your control
    const IDENTITY_FNAME = "Christian"; // have some fun with this
    const IDENTITY_LNAME = "Hahn"; // ditto
    const IDENTITY_PHONE = "2032938735"; // eventually this will be used for omnichannel
    const DATE_OF_BIRTH = "1988-06-10T00:00:00.000Z";
    const GENDER = "male";
    const IDENTITY_ID = "007"; // placeholder
    const IDENTITY_PROVIDER = "Hahn"; // also placeholder
    const CURRENCY = "EUR";
    const ORDER_ID = "DummyOrder";

    // Mapping -> Ascii to Key
    const A = 65;const B = 66;const C = 67;const D = 68;const E = 69;const F = 70;const G = 71;const H = 72;const I = 73;const J = 74;const K = 75;const L = 76;const M = 77;const N = 78;const O = 79;const P = 80;const Q = 81;const R = 82;const S = 83;const T = 84;const U = 85;const V = 86;const W = 87;const X = 88;const Y = 89;const Z = 90;

    //Script settings
    const ENABLE_KEYBOARD_SHORTCUTS = true;
    const SEND_VIEW_EVENT = true;

    // *********************************
    // INIT
    // *********************************
    window._boxever_settings = {
        client_key: SITECORECDP_CLIENT_KEY,
        target: SITECORECDP_API_TARGET,
        pointOfSale: SITECORECDP_POINT_OF_SALE,
        cookie_domain: SITECORECDP_COOKIE_DOMAIN,
        web_flow_target: SITECORECDP_WEB_FLOW_TARGET,
    };

    loadScCdpLib();
    if (SEND_VIEW_EVENT) {
        delayUntilBrowserIdIsAvailable(View);
    }

    function loadScCdpLib(callback) {
        console.log('Sitecore CDP Tampermonkey script - loadScCdpLib');
        var scriptElement = document.createElement('script');
        scriptElement.type = 'text/javascript';
        scriptElement.src = SITECORECDP_JS_LIB_SRC;
        scriptElement.async = false;
        document.head.appendChild(scriptElement);
    }

    function delayUntilBrowserIdIsAvailable(functionToDelay) {
        if (window.Boxever == null || window.Boxever == undefined || window.Boxever === "undefined" || window.Boxever.getID() === "anonymous") {
            const timeToWaitInMilliseconds = 300;
            console.log('Sitecore CDP browserId is not yet available. Waiting ${timeToWaitInMilliseconds}ms before retrying.');
            window.setTimeout(delayUntilBrowserIdIsAvailable, timeToWaitInMilliseconds, functionToDelay);
        } else {
            functionToDelay();
        }
    }

    //keyboard shortcuts
    function KeyPress(e) {
        var evtobj = window.event ? event : e
         // CTRL + A = Start as anon
        if (evtobj.keyCode == A && evtobj.ctrlKey) {
        }
        // CTRL + C = Close session
        if (evtobj.keyCode == C && evtobj.ctrlKey) {
        }
        // ....
    }

    if (ENABLE_KEYBOARD_SHORTCUTS) {
        document.onkeydown = KeyPress;
    }  
    
    // *********************************
    // CDP
    // *********************************   
    function View() {
        console.log('Sitecore CDP Tampermonkey script - sendViewEvent');
        var viewEvent = {
            "browser_id": Boxever.getID(),
            "channel": "WEB",
            "type": "VIEW",
            "language": "EN",
            "currency": CURRENCY,
            "page": window.location.pathname + window.location.search,
            "pos": SITECORECDP_POINT_OF_SALE,
            "session_data": {
                "uri": window.location.pathname
            }
        };
        Boxever.eventCreate(viewEvent, function(data) {}, 'json');
        console.log('view event');
    }
     // *********************************
})();
