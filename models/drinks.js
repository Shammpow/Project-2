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
        imageURL: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });
    return drinks;
};
