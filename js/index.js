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

  // evaluates validity of input element as a 4-digit session number
  // if valid, enable join button, else disable join button
  function checkValidInput() {
    if (this.value.length >= 4) {
      document.getElementById("btn-join").disabled = false;
    } else {
      document.getElementById("btn-join").disabled = true;
    }
  }

  // pre-condition: 4-digit number added to text box
  // links to game page if session ID is valid
  function linkToGame() {
    let sessionID = document.getElementById("session-name").value;
    let idIsValid = true; /** in the future, perform session validation in firebase here */

    if (idIsValid) {
      let a = document.createElement("a");
      a.href = "game.html?session=" + sessionID;
      a.click();
    } else {
      alert("Error: This is not the ID of an current game.");
    }
  }

})();