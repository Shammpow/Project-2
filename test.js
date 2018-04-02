var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

var page = nightmare
  .goto("https://sleepy-cove-80178.herokuapp.com")
  .type("#search", "Tonberry")
  .click("#searchButton")
  .wait("#links a")
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
