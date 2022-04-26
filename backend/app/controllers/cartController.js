const db = require('../models/models-index')

const Cart = db.cart


const addCartItem = async (req, res) => {

    let info = {
        title: req.body.title,
        price: req.body.price
    }

    const item = await Cart.create(info)
    res.status(200).send(item)
    console.log(item)

}
const getAllCartItem = async (req, res) => {

    let item = await Cart.findAll({})
    res.status(200).send(item)

}
const getOneCartItem = async (req, res) => {

    let id = req.params.id
    let item = await Cart.findOne({ where: { id: id }})
    res.status(200).send(item)

}
const deleteCartItem = async (req, res) => {

    let id = req.params.id
    
    await  Cart.destroy({ where: { id: id }} )

    res.status(200).send('Cart Item is deleted !')

}
// to delete all cart item
const deleteAllCartItem = async (req , res) => {
    await Cart.sync({force: true})
    res.status(200).send('All Cart Item is deleted');
}

const sumOfCart = async (req, res) => {
    try {
      const totalPrice = await Cart.findOne({
        attributes: [sequelize.fn("SUM", sequelize.col("price"))],
        raw: true
      });
      res.send(totalPrice);
    } catch (err) {
      res.send(err);
    }
  }

module.exports = {
    addCartItem,
    getAllCartItem,
    deleteCartItem,
    getOneCartItem,
    deleteAllCartItem,
    sumOfCart

}

