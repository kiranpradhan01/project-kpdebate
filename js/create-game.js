(function() {
  "use strict"
  window.addEventListener("load", init);

  function init() {
    let btnStart = document.getElementById("btn-start");
    btnStart.addEventListener("click", startGame);

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
    // if every "input" element doesn't have an empty (i.e. user has typed something into all)
    //  then enable id="start"
    //  else disable id="start"
    console.log("hello");
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
    let topicBox = document.getElementById("input-topic");
    topicBox.value = "Are dogs better than cats?";

    // restore first screen of modal
  }

  /**
   * evaluates whether user has filled out all required fields.
   * If so, creates a session ID for the game, and then 
   * links the user to the game screen.
   */
  function startGame() {
    alert("Hello! This is mainly a static webpage for now, but this button is supposed to evaluate that all required fields have been filled by the user, and then link them to the main game page if everything is correct. Otherwise a red error notice appears.");
    // evaluate that all required fields are filled

    // create a websession id

    // link to main game page
  }

})();