(function() {
  "use strict"
  window.addEventListener("load", init);

  function init() {
    let btnVote = document.getElementsByClassName("btn-player");
    for (let i = 0; i < btnVote.length; i++) {
      btnVote[i].addEventListener("click", function(event) {
        alert("hello! With time this will become a proper win prompt, but for now have this Alert. Player " + (i + 1) + " wins!");
      });
    }
  }

})();