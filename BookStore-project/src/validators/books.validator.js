import Joi from '@hapi/joi';
import HttpStatus from 'http-status-codes';

export const BookValidator = (req, res, next) => {
    const schema = Joi.object({
        description: Joi.string(),
        discountPrice: Joi.string(),
        bookImage: Joi.string(),
        admin_user_id: Joi.string(),
        bookName: Joi.string(),
        author: Joi.string(),
        quantity: Joi.string(),
        price: Joi.string()
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    } else {
        next();
    }
};