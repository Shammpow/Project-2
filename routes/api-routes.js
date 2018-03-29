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
                console.log(JSON.stringify(data, null, 2))
                var hbsObject = {
                    foods: data
                }
                res.render("foods", hbsObject);
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

    app.get("/api/foods/source/:source", function (req, res) {
        db.foods.findAll({
            where: {
                source: req.params.source
            }
        })
            .then(function (dbfoods) {
                res.json(dbfoods);
            });
    });

    app.get("/api/foods/id/:id", function (req, res) {
        db.foods.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbfood) {
                res.json(dbfood);
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
            blurb: req.body.blurb
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
            blurb: req.body.blurb
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // DELETE route for deleting posts
    app.delete("/api/drinks/:id", function (req, res) {
        db.drinks.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    app.delete("/api/foods/:id", function (req, res) {
        db.foods.destroy({
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
        db.drinks.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbdrink) {
                res.json(dbdrink);
            });
    });
    app.put("/api/foods", function (req, res) {
        db.foods.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbfood) {
                res.json(dbfood);
            });
    });
};
