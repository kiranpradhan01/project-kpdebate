(function() {
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
      h2.textContent = 'Error: Session ID was invalid';
      document.querySelector('body').prepend(h2);
    }

    let btnVote = document.getElementsByClassName("btn-player");
    for (let i = 0; i < btnVote.length; i++) {
      btnVote[i].addEventListener("click", function(event) {
        alert("hello! With time this will become a proper win prompt, but for now have this Alert. Player " + (i + 1) + " wins!");
      });
    }
  }

})();