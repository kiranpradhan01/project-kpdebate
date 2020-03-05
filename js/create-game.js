(function () { 
  "use strict"
  window.addEventListener("load", init);
  let topicData = null;
  let state = {
    player1: "",
    player2: "",
    topic: ""
  };

  function init() {
    // load data
    d3.csv("data/topics.csv").then(function (data) {
      topicData = data;
      generateTopicCategories();
    });

    // 'Begin Debate' button disabled till all inputs are not empty
    document.querySelector("#btn-start").disabled = true;
    document.querySelector("#input-topic").addEventListener("keyup", checkReadyToStart);
    document.querySelector("#input-player1").addEventListener("keyup", checkReadyToStart);
    document.querySelector("#input-player2").addEventListener("keyup", checkReadyToStart);
    
    // add event listeners  
    document.getElementById("input-topic").addEventListener("change" , (e) => this.setState({"topic": e.target.value}));
    document.getElementById("input-player1").addEventListener("input", (e) => this.setState({"player1": e.target.value}));
    document.getElementById("input-player2").addEventListener("input", (e) => this.setState({"player2": e}));
    document.getElementById("btn-start").addEventListener("click", linkToGame);
    document.getElementById("btn-get-topic").addEventListener("click", getRandomTopics);
    document.getElementById("btn-choice-1").addEventListener("click", assignTopic);
    document.getElementById("btn-choice-2").addEventListener("click", assignTopic);
    document.getElementById("open-modal").addEventListener("click", function() { 
      // reveal first screen
      let firstScreen = document.getElementById("modal-categ-screen");
      firstScreen.classList.remove("d-none");

      let secondScreen = document.getElementById("modal-choice-screen");
      secondScreen.classList.add("d-none");
    });
  }

   /**
   * Adds topic categories from the CSV into the dropdown.
   */
  function generateTopicCategories() {
    let dropdown = document.querySelector("select");
    let prevTopic = "";
    for (let i = 0; i < topicData.length; i++) {
      let topic = topicData[i];
      if (topic.category !== prevTopic) {
        prevTopic = topic.category;
        
        let newOption = document.createElement("option");
        newOption.value = topic.category;
        newOption.textContent = topic.category;
        dropdown.appendChild(newOption);
      }
    }
  }
  /**
   * If every "input" element is not empty, enable start button, else disable start button
   */
  function checkReadyToStart() {
    state.topic = document.querySelector("#input-topic").value.trim();
    state.player1 = document.querySelector("#input-player1").value.trim();
    state.player2 = document.querySelector("#input-player2").value.trim();
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
    let displayedTopics = [];
    let firstTopic = Math.floor((Math.random() * categoryTopics.length));
    let secondTopic = null;
    
    displayedTopics.push(categoryTopics[firstTopic]);
    while (secondTopic === null || secondTopic === firstTopic) { // do this to avoid duplicates
      secondTopic = Math.floor((Math.random() * categoryTopics.length));
    }
    displayedTopics.push(categoryTopics[secondTopic]);

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
    state.topic = document.querySelector("#input-topic").value.trim();

    // reveal second screen, hide first screen
    let secondScreen = document.getElementById("modal-choice-screen");
    secondScreen.classList.remove("d-none");

    let firstScreen = document.getElementById("modal-categ-screen");
    firstScreen.classList.add("d-none");

    // revert select option to 'Anything'
    document.querySelector("select").value = "Anything";
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
  function linkToGame() {
    // create a session ID
    let sessionID = Math.floor(1000 + Math.random() * 9000);
    /** add sessionID to firebase here */

    // link to admin game page
    let a = document.createElement("a");
    a.href = "admin-game.html?session=" + sessionID;
    a.click();
  }

})();