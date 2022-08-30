import express from 'express';
import * as BookController from '../controllers/books.controller';

const router = express.Router();

//Router for Getting all books
router.get('',BookController.getAllbooks)

//Router for getting book by Id
router.get('/:_id',BookController.getbook)

export default router;