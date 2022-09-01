import Book from '../models/books.model'
import Cart from '../models/cart.model'

export const AddCart = async (_id, body) => {
    const exitsingBook = await Book.findById({_id});
    if (exitsingBook){
        const exitsingCart = await Cart.findOne({userId:body.userId})
        let book = {
            productId: exitsingBook._id,
            description: exitsingBook.description,
            bookName: exitsingBook.bookName,
            author: exitsingBook.author,
            quantity: 1,
            price:exitsingBook.price,
            
        }
        if(exitsingCart){
            const AddBooks = await Cart.findOneAndUpdate({userId: body.userId}, { books: exitsingCart.books}, { new: true });
            return AddBooks;

        }else{
            
            const CreateCart = await Cart.create({userId: body.userId, books:[book] })
            return CreateCart;

        }
    }else{
        throw new Error("Book doesn't exists")
    }
}

export const getCart = async(EmailID) =>{
    const getbook = await Cart.findOne({userId: EmailID})
    return getbook;
}