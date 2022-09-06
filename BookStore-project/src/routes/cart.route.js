import express from "express";
import * as CartController from '../controllers/carts.controller'
import { userAuth } from "../middlewares/auth.middleware";

const router = express.Router()

//Router for Adding Cart items
router.post('/:_id',userAuth,CartController.AddCart)

//Router for getting all cart items
router.get('',userAuth,CartController.getCart)

//Router for Adding Cart items
router.put('/:_id/update',userAuth,CartController.updateCart)

///Router to remove book from cart
router.put('/:_id/remove',userAuth,CartController.removeBookFromCart)

//Router to Place Order
router.put('/purchased/true',userAuth,CartController.isPurchased);



export default router;