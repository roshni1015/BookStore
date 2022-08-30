import HttpStatus from 'http-status-codes';
import * as BookService from '../services/books.service';

export const getAllbooks = async (req, res, next) => {
    try {
        const data = await BookService.getAllbooks();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All books fetched successfully'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
          code: HttpStatus.BAD_REQUEST,
          message:`${error}`
        })
    }
};

export const getbook = async (req, res, next) => {
    try {
        const data = await BookService.getbook(req.params._id,req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Book fetched successfully'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            data:data,
            message: 'Could not fetch book'
        })
    }
};