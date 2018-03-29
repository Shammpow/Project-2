$(document).ready(function () {
    $.get("/api/drinks", function (data, status) {

    }).then((data) => {
        for (i = 0; i < data.drinks; i++) {

            var ingText = $("$hideMe"[i]).val().split(',');
        }
        //     console.log(data);
        //     for (i = 0; i < data.drinks; i++) {
        //         var ingArray = [];
        //         var blah = drinks[i].ingredients.val().split(',');
        //         ingArray.push(blah);
        //         console.log(ingArray);
        //         for (j = 0; j < ingArray.length; j++) {
        //             var span = $("<span>");
        //             $(span).html("<li>" + ingArray[j])
        //             $(".ingredients").append(span);
        //         }
        //     }
    })
   

    // $(".hideMe").hide();
    // for (i = 0; i < ingArray.length; i++) {
    //     var span = $("<span>");
    //     $(span).html("<li>" + ingArray[i])
    //     $(".ingredients").append(span);
    // }
});