$(".addDrink").on("click", function (event) {
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
        function () {
            location.reload();
        }
    );
});
$(".addFood").on("click", function (event) {
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
        function () {
            location.reload();
        }
    );

})