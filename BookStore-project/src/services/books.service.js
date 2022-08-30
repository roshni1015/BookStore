import Book from '../models/books.model';

export const getAllbooks = async () => {
    const data = await Book.find();
    return data;
}

export const getbook = async (_id) => {
    const data = await Book.findOne({_id:_id});
    return data;
}
