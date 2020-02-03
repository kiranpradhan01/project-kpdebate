(function() {
  "use strict"
  window.addEventListener("load", init);

  function init() {
    // get all "input"s
    // give them all an event listener for checkReadyToStart
    let textboxes = document.querySelectorAll("input");
    textboxes.map(function(input) {
      input.addEventListener("change", checkReadyToStart);
    });

    let btnStart = document.getElementById("start");
    btnStart.addEventListener("click", startGame);
  }

  function checkReadyToStart() {
    // if every "input" element doesn't have an empty (i.e. user has typed something into all)
    //  then enable id="start"
    //  else disable id="start"
    console.log("hello");
  }

  /**
   * toggles the modal to become visible.
   */
  function startGame() {
    alert("Hello! This is currently a static webpage, but this button is supposed to evaluate that all required fields have been filled by the user, and then link them to the main game page if everything is correct. Otherwise a red error notice appears.");
    // evaluate that all required fields are filled

    // create a websession id

    // link to main game page
  }
})();