// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/drinks/", function (req, res) {
        db.drinks.findAll({})
            .then(function (data) {
                console.log(JSON.stringify(data, null, 2))
                var hbsObject = {
                    drinks: data
                }
                res.render("drinks", hbsObject);
            });

    });
    app.get("/food/", function (req, res) {
        db.foods.findAll({})
            .then(function (data) {
                console.log(JSON.stringify(data, null, 2))
                var hbsObject = {
                    foods: data
                }
                res.render("foods", hbsObject);
            });

    });

    // GET route for getting all of the posts
    app.get("/api/drinks/", function (req, res) {
        db.drinks.findAll({})
            .then(function (data) {
                console.log(JSON.stringify(data, null, 2))
                var hbsObject = {
                    drinks: data
                }
                res.json(hbsObject);
            });

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

    // Get route for returning drinkss of a specific category
    app.get("/api/drinks/source/:source", function (req, res) {
        db.Drinks.findAll({
            where: {
                source: req.params.source
            }
        })
            .then(function (dbdrinks) {
                res.json(dbdrinks);
            });
    });

    // Get rotue for retrieving a single drinks
    app.get("/api/drinks/:id", function (req, res) {
        db.Drinks.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbdrinks) {
                res.json(dbdrinks);
            });
    });

    // POST route for saving a new post
    app.post("/api/drinks", function (req, res) {
        console.log(req.body);
        db.Drinks.create({
            title: req.body.title,
            body: req.body.body,
            category: req.body.category
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // DELETE route for deleting posts
    app.delete("/api/drinks/:id", function (req, res) {
        db.Drinks.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // PUT route for updating posts
    app.put("/api/drinks", function (req, res) {
        db.Drinks.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbDrink) {
                res.json(dbDrink);
            });
    });
};
