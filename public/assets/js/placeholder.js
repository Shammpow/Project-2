$( document ).ready(function() {
    var ingredients = $(".hideMe").text().split(",");
    $(".hideMe").hide();
    console.log(ingredients)
    for (i = 0; i < ingredients.length; i++) {
        var span = $("<span>");
        $(span).html("<li>" + ingredients[i])
        $(".ingredients").append(span);
    }
});