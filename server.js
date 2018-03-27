var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

<<<<<<< HEAD
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
=======
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
>>>>>>> origin/master
        console.log("Listening on port: ", PORT);
    });
});