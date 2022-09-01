import HttpStatus from 'http-status-codes'
import * as CartService from '../services/carts.service'

export const AddCart = async (req, res, next) => {
    try {
      const data = await CartService.AddCart(req.params._id,req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book added to cart successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };

  export const getCart = async (req, res, next) => {
    try {
      const data = await CartService.getCart(req.body.EmailId);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Cart items fetched successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };