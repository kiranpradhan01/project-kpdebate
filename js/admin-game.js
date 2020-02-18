// the HTML page that the person who creates the game will see
(function () {
    "use strict"
    window.addEventListener("load", init);

    function init() {
        // update audience join code, return error on page if not successful
        const urlParams = new URLSearchParams(window.location.search);
        const sessionID = urlParams.get("session");
        if (sessionID) {
            document.querySelector(".code").textContent = " " + sessionID;
        } else {
            document.getElementById("game-interface").classList.add("invisible");
            let h2 = document.createElement("h2");
            h2.classList.add("mx-auto");
            h2.id = "error";
            h2.textContent = 'Error: Session was not created. Please try again.';
            document.querySelector('body').prepend(h2);
        }
    }

    
    
})();