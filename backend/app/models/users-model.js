
  module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.INTEGER
        }
    
    })
    return Users

}