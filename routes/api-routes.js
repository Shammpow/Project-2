// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/add-drinks/", function (req, res) {
        res.render("addDrink");
    });

    app.get("/add-food/", function (req, res) {
        res.render("addFood");
    });

    app.get("/drinks/", function (req, res) {
        db.drinks.findAll({})
            .then(function (data) {
                var drinks = data;
                for (i = 0; i < drinks.length; i++) {
                    var drinkIngredients = drinks[i].ingredients.split(",\n");
                    drinks[i].ingredients = drinkIngredients;
                }
                var hbsObject = {
                    drinks: drinks,

                }
                res.render("drinks", hbsObject);
            });

    });

    

    // GET route for getting all of the posts
    app.get("/api/drinks/", function (req, res) {
        db.drinks.findAll({})
            .then(function (data) {
                var hbsObject = {
                    drinks: data
                }
                res.json(hbsObject);
            });

    });

    // Get route for returning drinks of a specific category
    app.get("/api/drinks/source/:source", function (req, res) {
        db.drinks.findAll({
            where: {
                source: req.params.source
            }
        })
            .then(function (dbdrinks) {
                res.json(dbdrinks);
            });
    });

    // Get rotue for retrieving a single drinks
    app.get("/api/drinks/id/:id", function (req, res) {
        db.drinks.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbdrinks) {
                res.json(dbdrinks);
            });
    });

    app.get("/food/", function (req, res) {
        db.foods.findAll({})
            .then(function (data) {
                var food = data;
                for (i = 0; i < food.length; i++) {
                    var foodIngredients = food[i].ingredients.split(",");
                    food[i].ingredients = foodIngredients;
                }
                var hbsObject = {
                    food: food,

                }
                res.render("foods", hbsObject);
            });
    });

    app.get("/food/source/:source", function (req, res) {
        db.foods.findAll({ where: { source: req.params.source } })
            .then(function (data) {
                var food = data;
                for (i = 0; i < food.length; i++) {
                    var foodIngredients = food[i].ingredients.split(",");
                    food[i].ingredients = foodIngredients;
                }
                var hbsObject = {
                    food: food,

                }
                res.render("foods", hbsObject);
            });
    });

    app.get("/food/name/:name", function (req, res) {
        db.foods.findAll({ where: { name: req.params.name } })
            .then(function (data) {
                var food = data;
                for (i = 0; i < food.length; i++) {
                    var foodIngredients = food[i].ingredients.split(",");
                    food[i].ingredients = foodIngredients;
                }
                var hbsObject = {
                    food: food,

                }
                res.render("foods", hbsObject);
            });
<<<<<<< HEAD
=======
    });

    app.get("/drinks/source/:source", function (req, res) {
        db.drinks.findAll({ where: { source: req.params.source } })
            .then(function (data) {
                var drinks = data;
                for (i = 0; i < drinks.length; i++) {
                    var drinksIngredients = drinks[i].ingredients.split(",");
                    drinks[i].ingredients = drinksIngredients;
                }
                var hbsObject = {
                    drinks: drinks,

                }
                console.log(hbsObject)
                res.render("drinks", hbsObject);
            });
    });

    app.get("/drinks/name/:name", function (req, res) {
        db.drinks.findAll({ where: { name: req.params.name } })
            .then(function (data) {
                var drinks = data;
                for (i = 0; i < drinks.length; i++) {
                    var drinksIngredients = drinks[i].ingredients.split(",");
                    drinks[i].ingredients = drinksIngredients;
                }
                var hbsObject = {
                    drinks: drinks,

                }
                res.render("drinks", hbsObject);
            });
>>>>>>> origin/dakota_edwards
    });



    app.get("/api/foods/", function (req, res) {
        db.foods.findAll({})
            .then(function (data) {
                console.log(JSON.stringify(data, null, 2))
                var hbsObject = {
                    foods: data
                }
                res.json(hbsObject);
            });

    });


    // POST route for saving a new drink
    app.post("/api/drinks", function (req, res) {
        console.log(req.body);
        db.drinks.create({
            name: req.body.name,
            source: req.body.source,
            ingredients: req.body.ingredients,
            recipe: req.body.recipe,
            blurb: req.body.blurb,
            imageURL: req.body.imageURL
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
    app.post("/api/foods", function (req, res) {
        console.log(req.body);
        db.foods.create({
            name: req.body.name,
            source: req.body.source,
            ingredients: req.body.ingredients,
            recipe: req.body.recipe,
            blurb: req.body.blurb,
            imageURL: req.body.imageURL
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.post('/api/search/food', function (req, res) {
        var infoRequest = req.body;
        console.log(infoRequest)
        db.foods.findAll({

            where: infoRequest
        }).then(function (data) {
            res.redirect("/drinks", data);
        });
    });

    // DELETE route for deleting posts
    // app.delete("/api/drinks/:id", function (req, res) {
    //     db.drinks.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     })
    //         .then(function (dbPost) {
    //             res.json(dbPost);
    //         });
    // });

    // app.delete("/api/foods/:id", function (req, res) {
    //     db.foods.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     })
    //         .then(function (dbPost) {
    //             res.json(dbPost);
    //         });
    // });

    // // PUT route for updating posts
    // app.put("/api/drinks", function (req, res) {
    //     db.drinks.update(req.body,
    //         {
    //             where: {
    //                 id: req.body.id
    //             }
    //         })
    //         .then(function (dbdrink) {
    //             res.json(dbdrink);
    //         });
    // });
    // app.put("/api/foods", function (req, res) {
    //     db.foods.update(req.body,
    //         {
    //             where: {
    //                 id: req.body.id
    //             }
    //         })
    //         .then(function (dbfood) {
    //             res.json(dbfood);
    //         });
    // });
};
