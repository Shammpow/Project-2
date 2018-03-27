module.exports = function (sequelize, DataTypes) {
    var drinks = sequelize.define("drinks", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        source: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        recipe: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        blurb: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });
    return drinks;
};
