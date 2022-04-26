const db = require('../models/models-index')


// image Upload
const multer = require('multer')
const path = require('path')

// create main Model
const Ingredient = db.ingredients


//  main Work

// 1. create Ingredient

const addIngredient = async (req, res) => {

    let info = {
        image: req.file.path,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description
    }

    const ingredient = await Ingredient.create(info)
    res.status(200).send(ingredient)
    console.log(ingredient)

}

// get One Ingredient 
const getOneIngredient = async (req, res) => {

    let id = req.params.id
    let item = await Ingredient.findOne({ where: { id: id }})
    res.status(200).send(item)

}


// get all Ingedrient

const getAllIngredient = async (req, res) => {

    let ingedrient = await Ingredient.findAll({})
    res.status(200).send(ingedrient)

}

// Upload Image Contoller
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})



const upload = multer({
    storage: storage,
    limits: { fileSize: '10000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')

module.exports = {
    addIngredient,
    upload,
    getAllIngredient,
    getOneIngredient

}