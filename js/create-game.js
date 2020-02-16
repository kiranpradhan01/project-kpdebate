(function() {
  "use strict"
  window.addEventListener("load", init);

  function init() {
    console.log("init-ing");
    // 'Begin Debate' button disabled till all inputs are not empty
    document.querySelector("#btn-start").disabled = true;
    document.querySelector("#input-topic").addEventListener("keyup", checkReadyToStart);
    document.querySelector("#input-player1").addEventListener("keyup", checkReadyToStart);
    document.querySelector("#input-player2").addEventListener("keyup", checkReadyToStart);
    
    // button can only detect click if not disabled
    document.getElementById("btn-start").addEventListener("click", startGame);

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
  }

  function checkReadyToStart() {
    // if every "input" element is not empty (i.e. user has typed something into all)
    //  then enable button
    //  else disable button
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
  }

  /**
   * part of the Randomize Topic functionality. 
   * response function. Handles when one of 2 random topics is selected by user.
   * Binds the selected topic to the Topic textbox on the main page.
   * Also restores first screen of the modal
   */
  function assignTopic() {
    let topicBox = document.querySelector("#input-topic");
    topicBox.value = "Are dogs better than cats?";

    // restore first screen of modal
  }

  /**
   * evaluates whether user has filled out all required fields.
   * If so, creates a session ID for the game, and then 
   * links the user to the game screen.
   */
  function startGame() {
    // alert("Hello! This is mainly a static webpage for now, but this button is supposed to evaluate that all required fields have been filled by the user, and then link them to the main game page if everything is correct. Otherwise a red error notice appears.");
    // create a websession id
    let sessionID = Math.floor(1000 + Math.random() * 9000)
    console.log(sessionID);
    // link to main game page
    window.location.href = "admin-game.html";
  }

})();