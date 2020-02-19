(function () { 
  "use strict"
  window.addEventListener("load", init);
  let topicData = null;

  function init() {
    // load data
    d3.csv("data/topics.csv").then(function (data) {
      topicData = data;
    });

    // 'Begin Debate' button disabled till all inputs are not empty
    document.querySelector("#btn-start").disabled = true;
    document.querySelector("#input-topic").addEventListener("keyup", checkReadyToStart);
    document.querySelector("#input-player1").addEventListener("keyup", checkReadyToStart);
    document.querySelector("#input-player2").addEventListener("keyup", checkReadyToStart);

    // add event listeners  
    document.getElementById("btn-start").addEventListener("click", linkToGame);
    document.getElementById("btn-get-topic").addEventListener("click", getRandomTopics);
    document.getElementById("btn-choice-1").addEventListener("click", assignTopic);
    document.getElementById("btn-choice-2").addEventListener("click", assignTopic);
    document.getElementById("open-modal").addEventListener("click", function() { // reveal first screen
      let firstScreen = document.getElementById("modal-categ-screen");
      firstScreen.classList.remove("d-none");

      let secondScreen = document.getElementById("modal-choice-screen");
      secondScreen.classList.add("d-none");
    });
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
    let categ = document.querySelector("select").value;
    console.log(categ);

    // evaluate what subcategory to "query" from
    let categoryTopics = null;
    if (categ !== "all") {
      categoryTopics = [];
      topicData.forEach((topic) => {
        if (topic.category === categ)
        categoryTopics.push(topic);
      });
    } else {
      categoryTopics = topicData;
    }

    // randomly select 2 topics from the described category
    console.log(categoryTopics);
    let displayedTopics = [];
    let firstTopic = Math.floor((Math.random() * categoryTopics.length));
    let secondTopic = null;
    
    displayedTopics.push(categoryTopics[firstTopic]);
    while (secondTopic === null || secondTopic === firstTopic) { // do this to avoid duplicates
      secondTopic = Math.floor((Math.random() * categoryTopics.length));
    }
    displayedTopics.push(categoryTopics[secondTopic]);

    console.log(firstTopic);
    console.log(secondTopic);
    console.log(displayedTopics);

    // bind options to the modal's second screen
    bindRandomTopics(displayedTopics);

    
  }

  /**
   * part of the Randomize Topic functionality.
   * Once two random topics are selected, change the text content of btn-choice-1 and btn-choice-2
   * to reflect your choices.
   * @param {array} displayedTopics - array of topics in the same format as seen in the csv.
   */
  function bindRandomTopics(displayedTopics) {
    document.getElementById("btn-choice-1").textContent = displayedTopics[0].topic;
    document.getElementById("btn-choice-2").textContent = displayedTopics[1].topic;

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
  function assignTopic() {
    let topicBox = document.querySelector("#input-topic");
    topicBox.value = this.textContent;
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