(function() {
  "use strict";

  var accounts, currAcc, recheck;
  var tries = 0;

  window.onload = function () {
    recheck = window.setInterval(getAccounts, 2000);
  };

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

  function getAccounts() {

    if(document.getElementsByClassName("gb_db").length != 0 || tries > 9) {
      clearInterval(recheck);
    }

    //Counter to terminate rechecks after 10 tries (20 secs total)
    tries += 1;

    //Wait 1 sec for DOM elements to download
    window.setTimeout( null, 1000);

    //Fetch html elements containing href of accounts
    accounts = document.getElementsByClassName("gb_eb");
    //index for default active account
    currAcc = 0;

    //console.log(accounts.length);

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

  }


})();