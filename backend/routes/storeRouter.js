const ingredientController = require('../app/controllers/ingedrientsContoller');
const cartController = require('../app/controllers/cartController')
const ordersController = require('../app/controllers/ordersController')
const loginController = require('../app/controllers/loginController')

const router = require('express').Router();

// Ingredient  routers
router.post('/addIngredient', ingredientController.upload  ,ingredientController.addIngredient);
router.get('/getAllIngredient',  ingredientController.getAllIngredient);
router.get('/get',  ingredientController.getAllIngredient);


// Cart routes
router.post('/addCartItem',  cartController.addCartItem);
router.get('/getTotal' , cartController.sumOfCart)

router.get('/getaAllCartItem',  cartController.getAllCartItem);
router.delete('/deleteCartItem/:id',  cartController.deleteCartItem);
router.delete('/deleteAllCartItem',  cartController.deleteAllCartItem);

// Order Router
router.get('/getOrders',  ordersController.getOrders);
router.post('/addOrderItem',  ordersController.addOrderItem);

// User Router
router.get('/getUser/:email',  loginController.getUser);
router.get('/getAllUser',  loginController.getAllUser);


router.post('/addUser', loginController.addUser);


module.exports = router