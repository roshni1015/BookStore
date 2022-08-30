import Joi from '@hapi/joi';
import HttpStatus from 'http-status-codes';


export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    FullName: Joi.string().min(4).required(),
    EmailID: Joi.string().email().required(),
    Password: Joi.string().min(8).required(),
    PhoneNumber: Joi.number().min(12)
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`,
    });
    next(error);
  } else {
    next();
  }
};
