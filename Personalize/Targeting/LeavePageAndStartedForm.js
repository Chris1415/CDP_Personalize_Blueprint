// Triggers the experience when user moves their mouse out of the browser window
(function () {
    function checkMouseLocation() {
        var emailField = document.getElementById("contact-mail");
        var firstName = document.getElementById("contact-firstname");
        var lastName = document.getElementById("contact-lastname");
        var message = document.getElementById("contact-textarea");
        var topic = document.getElementById("contact-topic");
        var isFormFilled = emailField.value !== "" || firstName.value !== "" || topic.value !== "" || lastName.value !== "" || message.value !== "";
        var isOutsideViewPort = event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight);
        const params = new URLSearchParams(window.location.search);
        var keyParam = params.get('key');
        var isAlreadyLoaded = keyParam !== null;
        if (isOutsideViewPort && isFormFilled && !isAlreadyLoaded) {
            targetingPassed();
            document.removeEventListener("mouseleave", checkMouseLocation);
        }
    }
    document.addEventListener("mouseleave", checkMouseLocation);
})();