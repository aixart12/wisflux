const db = require('../models/models-index');

const User = db.users
console.log('dhruv2')

const addUser = async (req, res) => {
    let info = {
        email: req.body.email,
        password: req.body.password
    }




    console.log(info)
    const item = await User.create(info)
    res.status(200).send(item)
    console.log(item)

}

const getUser = async (req, res) => {
    let email = req.params.email
    let item = await User.findOne({ where: { email: email }})
    res.status(200).send(item)

}

const getAllUser = async (req, res) => {

    let item = await User.findAll({})
    res.status(200).send(item)

}
module.exports = {
    getUser,
    addUser,
    getAllUser
}
