(function() {
  "use strict";

  //Fetch html elements containing href of accounts
  var accounts = document.getElementsByClassName("gb_eb");

  //index for default active account
  var currAcc = 0;

  //Find the active account index
  for(var i=0;i<accounts.length;i++) {
    if(accounts[i].classList.contains("gb_gb")) {
      currAcc = i;
      break;
    }
  }

  if(accounts.length > 1) {
    document.addEventListener("keydown", keyEvent);
  }


  function keyEvent(event) {
    var key = event.keyCode || event.which;
    if(event.shiftKey && event.ctrlKey) {
      if(key == 37) { // Cycle to previous account [CTRL + SHIFT + <-]
        if(currAcc > 0) {
          window.location = accounts[currAcc - 1].getAttribute("href");
        } else {
          window.location = accounts[accounts.length - 1].getAttribute("href");
        }
      } else if(key == 39) { // Cycle to next account [CTRL + SHIFT + ->]
        if(currAcc < accounts.length - 1) {
          window.location = accounts[currAcc + 1].getAttribute("href");
        } else {
          window.location = accounts[0].getAttribute("href");
        }
      }
    }
  }


})();