const db = require('../models/models-index')

const Orders =db.oreders
const getOrders = async (req, res) => {

    let order = await Orders.findAll({})
    res.status(200).send(order)

}
const addOrderItem = async (req, res) => {

    let info = {
        title: req.body.title,
        price: req.body.price
    }

    const item = await Orders.create(info)
    res.status(200).send(item)
    console.log(item)

}

module.exports ={
    getOrders,
    addOrderItem
}