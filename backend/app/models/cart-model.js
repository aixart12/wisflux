module.exports = (sequelize, DataTypes) => {

    const Cart = sequelize.define("Cart", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        }
    
    })

    return Cart

}