/*
  ***
  Kiran Pradhan & Patrin Sinteppadon
  Debate Application

  Facilitates behavior of the home page of the game. When the Join button is clicked, the app
  evaluates the validity of the session ID entered in the input box

  ***
*/

(function() {
  "use strict"
  window.addEventListener("load", init);

  function init() {
    document.getElementById("session-name").addEventListener("keyup", checkValidInput);
    document.getElementById("btn-join").addEventListener("click", linkToGame);
  }

  /**
   * evaluates validity of the input
   * For now, we'll assume game sessions are all 6 characters long.
   * 
   */
  function checkValidInput() {
    if (this.value.length >= 4) {
      document.getElementById("btn-join").disabled = false;
    } else {
      document.getElementById("btn-join").disabled = true;
    }
  }

  /**
   * pre-condition: some kind of input is in the textbox
   * In the future this should evaluate the current sessions available in firebase.
   * Links to the game page. 
   */
  function linkToGame() {
    let sessionID = document.getElementById("session-name").value;
    let idIsValid = true; /** perform firebase validating here */

    if (idIsValid) {
      let a = document.createElement("a");
      a.href = "game.html?session=" + sessionID;
      a.click();
    } else {
      alert("Error: This is not the ID of an ongoing game.");
    }
    
  }

})();