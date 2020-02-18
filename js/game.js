(function() {
  "use strict"
  window.addEventListener("load", init);

  const phases = [
    {
      name: "opening-stmt",
      appendedMessage: "'s Opening Statement",
      time: 60
    }, 
    {
      name: "rebuttal",
      appendedMessage: "'s Rebuttal",
      time: 60
    },
    {
      name: "cross-exam",
      appendedMessage: "'s Cross-Examination",
      time: 180
    },
    {
      name: "closing-stmt",
      appendedMessage: "'s Closing Statements",
      time: 60
    },
    {
      name: "voting",
      appendedMessage: "Debate is Over! Begin voting once the admin unlocks it.",
      time: null
    }];

  let state = {
    sessionID: "4343",
    playerNames: ["Patrin", "Kiran"],
    topic: "Is cereal a soup?",
    
    currentPhase: phases[0],
    currentSpeaker: 0,
    timer: null
  };

  function init() {
    // check for session
    const urlParams = new URLSearchParams(window.location.search);
    state.sessionID = urlParams.get("session");
    // update audience join code, return error on page if not successful
    if (state.sessionID) {
      document.querySelector(".code").textContent = " " + state.sessionID;
      /* 
        access Firebase to get state.playerNames, state.topic, as well as currentPhase/speaker/timer.
      */
    } else {
      document.getElementById("game-interface").classList.add("invisible");
      let h2 = document.createElement("h2");
      h2.classList.add("mx-auto");
      h2.id = "error";
      h2.textContent = 'Error: Session ID was invalid';
      document.querySelector('body').prepend(h2);
    }

    // assign name and topic information
    document.getElementById("player-1").textContent = state.playerNames[0];
    document.getElementById("player-2").textContent = state.playerNames[1];
    document.getElementById("topic").textContent = state.topic;

    // assign the first phase. 
    state.currentPhase = phases[0];
    state.currentSpeaker = 0;

    // Bind the information to the page
    let timerLabel = document.getElementById("timer-label");
    timerLabel.textContent = state.playerNames[state.currentSpeaker] + state.currentPhase.appendedMessage;
    state.timer = startCountdown(state.currentPhase.time);

    // init modal winners
    let btnVote = document.getElementsByClassName("btn-player");
    for (let i = 0; i < btnVote.length; i++) {
      btnVote[i].addEventListener("click", function(event) {
        alert("hello! With time this will become a proper win prompt, but for now have this Alert. Player " + (i + 1) + " wins!");
      });
    }
  }

  /**
    * initializes a timer that updates the visual element of a timer very second.
    * @param {number} timerLength - the length of the timer in seconds.
    */
   function startCountdown(timerLength) {
     let i = timerLength;
     let timerActor = document.getElementById("timer");
     document.getElementById("timer-card").classList.remove("bg-yellow");
 
     let timerID = setInterval(function() {
       if (i === 0) {              // end case, time left = 0
         clearInterval(timerID);
         timerID = null;
         timerActor.textContent = "Time's up!";
         document.getElementById("timer-card").classList.add("bg-yellow");
       } else {
         timerActor.textContent = convertToMinutes(i);
         i--;
       }
     }, 1000);

     return timerID;
   }

  /**
   * helper function to startCountdown.
   * If seconds is greater than 60, returns it in a minutes-converted format.
   * @param {number} seconds - the number of seconds to be converted to minutes
   */ 
  function convertToMinutes(seconds) {
    let min = Math.trunc(seconds / 60);
    let sec = seconds % 60; // number of seconds left in the current minute
    if (sec < 10) {
      sec = "0" + sec;
    }
    return min + ":" + sec;
  }

})();