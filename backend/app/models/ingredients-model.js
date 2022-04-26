module.exports = (sequelize, DataTypes) => {

    const Ingredients = sequelize.define("Ingredients", {
        image: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        }
    
    })

    return Ingredients

}