import express from "express";
import * as CartController from '../controllers/carts.controller'
import { userAuth } from "../middlewares/auth.middleware";

const router = express.Router()

//Router for Adding Cart items
router.post('/:_id',userAuth,CartController.AddCart)

// route to get books from cart
router.get('', userAuth, CartController.getCart);


export default router;