(function() {
  "use strict"
  window.addEventListener("load", init);
  let state = {};
  // load data
  d3.csv("data/topics.csv").then(function (data) {
    state.data = data;
    console.log(state.data[12]);
  })

  function init() {
    // 'Begin Debate' button disabled till all inputs are not empty
    document.querySelector("#btn-start").disabled = true;
    document.querySelector("#input-topic").addEventListener("keyup", checkReadyToStart);
    document.querySelector("#input-player1").addEventListener("keyup", checkReadyToStart);
    document.querySelector("#input-player2").addEventListener("keyup", checkReadyToStart);
    // button can only detect click if not disabled
    document.getElementById("btn-start").addEventListener("click", linkToGame);

    let btnRandomize = document.getElementById("randomize");
    btnRandomize.addEventListener("click", function() {
      // reveal first screen
      let firstScreen = document.getElementById("modal-categ-screen");
      firstScreen.classList.remove("d-none");
      
      let secondScreen = document.getElementById("modal-choice-screen");
      secondScreen.classList.add("d-none");
    });

    let btnTopic = document.getElementById("btn-get-topic");
    btnTopic.addEventListener("click", getRandomTopics);

    document.querySelector("#btn-choice-1").addEventListener("click", assignTopic("#btn-choice-1")); // will be one or the other
    document.querySelector("#btn-choice-2").addEventListener("click", assignTopic("#btn-choice-2")); // will be one or the other
  }

  // if every "input" element is not empty, enable start button, else disable start button
  function checkReadyToStart() {
    if (document.querySelector("#input-topic").value.trim().length > 0 &&
        document.querySelector("#input-player1").value.trim().length > 0 &&
        document.querySelector("#input-player2").value.trim().length > 0) {
      document.querySelector("#btn-start").disabled = false;
    } else {
      document.querySelector("#btn-start").disabled = true;
    }
  }

  /**
   * part of the Randomize Topic functionality.
   * response function. Requests for 2 random topic choices from backend.
   * Binds those options to the modal's second screen, and then reveals it.
   */
  function getRandomTopics() {
    // get current SELECT box value
    
    // query backend for 2 options

    // bind options ot the modal's second screen

    // reveal second screen, hide first screen
    let secondScreen = document.getElementById("modal-choice-screen");
    secondScreen.classList.remove("d-none");

    let firstScreen = document.getElementById("modal-categ-screen");
    firstScreen.classList.add("d-none");

    // restore screen of modal
    firstScreen.value("0");
  }

  /**
   * part of the Randomize Topic functionality. 
   * response function. Handles when one of 2 random topics is selected by user.
   * Binds the selected topic to the Topic textbox on the main page.
   * Also restores first screen of the modal
   */
  function assignTopic(btnID) {
    let choice = document.querySelector(btnID);
    console.log(choice.textContent);
    let topicBox = document.querySelector("#input-topic");
    topicBox.value = choice.textContent;
    return choice.textContent;
  }

  // generates random 4-number session ID for the game and links the user to admin game screen
  function linkToGame(selectedTopic) {
    // create a session ID
    let sessionID = Math.floor(1000 + Math.random() * 9000)
    console.log(sessionID);
    /** add sessionID to firebase here */

    // link to admin game page
    let a = document.createElement("a");
    a.href = "admin-game.html?session=" + sessionID + "game=" + selectedTopic;
    a.click();
  }

})();