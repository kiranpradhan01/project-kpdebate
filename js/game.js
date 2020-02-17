(function() {
  "use strict"
  window.addEventListener("load", init);

  function init() {
    // check for session
    const urlParams = new URLSearchParams(window.location.search);
    const sessionID = urlParams.get("session");
    if (sessionID) {
      document.querySelector(".code").textContent = sessionID;
    } else {
      document.getElementById("game-interface").classList.add("invisible");
      document.getElementById("error").classList.remove("d-none");
    }

    // init timer
    let timerID = null;

    // every 1000 ms, count down the seconds on your 10 second timer until you hit 0. Upon hitting
    // 0, clear the timer and display a message from Leeroy Jenkins.
    function startCountdown(timerLength) {
      let i = timerLength;
      timerID = setInterval(function() {
        if (i === 0) {              // end case, time left = 0
          clearInterval(timerID);
          timerID = null;
          console.log("Time's up lets do this!");
        } else {
          console.log(i + "...");
          i--;
        }
      }, 1000);
    }

    // init modal winners
    let btnVote = document.getElementsByClassName("btn-player");
    for (let i = 0; i < btnVote.length; i++) {
      btnVote[i].addEventListener("click", function(event) {
        alert("hello! With time this will become a proper win prompt, but for now have this Alert. Player " + (i + 1) + " wins!");
      });
    }
  }

})();