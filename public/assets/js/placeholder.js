<<<<<<< HEAD
$(document).on("click", "#addDrink", function () {
=======
$("#addDrink").on("click", function (event) {
>>>>>>> origin/dakota_edwards
    event.preventDefault();
    var newDrink = {
        name: $("#recipename").val().trim(),
        source: $("#source").val().trim(),
        ingredients: $("#ingredients").val().trim(),
        recipe: $("#recipe").val().trim(),
        blurb: $("#blurb").val().trim(),
        imageURL: $("#imageURL").val().trim(),
      };

    $.ajax("/api/drinks", {
        type: "POST",
        data: newDrink
      }).then(
        function() {
          console.log("Pushed a drink");
        }
      );
});
$("#addFood").on("click", function (event) {
    event.preventDefault();
    var newfood = {
        name: $("#recipename").val().trim(),
        source: $("#source").val().trim(),
        ingredients: $("#ingredients").val().trim(),
        recipe: $("#recipe").val().trim(),
        blurb: $("#blurb").val().trim(),
        imageURL: $("#imageURL").val().trim(),
      };

    $.ajax("/api/foods", {
        type: "POST",
        data: newfood
      }).then(
        function() {
<<<<<<< HEAD
          console.log("Pushed a food");
=======
          console.log("Pushed a drink");
>>>>>>> origin/dakota_edwards
        }
      );
})