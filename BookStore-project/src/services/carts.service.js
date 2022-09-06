import book from '../models/books.model'
import cart from '../models/cart.model'

export const AddCart = async (_id, body) => {
    const exitsingBook = await book.findById({_id});
    if (exitsingBook){
        const exitsingCart = await cart.findOne({userId:body.userId})
        let book = {
            productId: exitsingBook._id,
            description: exitsingBook.description,
            bookName: exitsingBook.bookName,
            author: exitsingBook.author,
            quantity: 1,
            price:exitsingBook.price,
            
        }
        if(exitsingCart){
            exitsingCart.books.push(book)
            const AddBooks = await cart.findOneAndUpdate({userId: body.userId}, { books: exitsingCart.books}, { new: true });
            return AddBooks;

        }else{
            
            const CreateCart = await cart.create({userId: body.userId, books:[book] })
            return CreateCart;

        }
    }else{
        throw new Error("Book doesn't exists")
    }
}




export const getCart = async(body) =>{
    const getbook = await cart.findOne({userId: body.EmailID})
    return getbook;
}


export const updateCart = async (_id, body) => {
    const bookCheck = await book.findById({ _id });
    if (bookCheck == null) {
        console.log('Book is not available');
    }
    else {
        const checkCart = await cart.findOne({ userId: body.userId })
        let book = {
            productId: bookCheck._id,
            description: bookCheck.description,
            discountPrice: bookCheck.discountPrice,
            bookName: bookCheck.bookName,
            bookImage: bookCheck.bookImage,
            author: bookCheck.author,
            price:bookCheck.price,
            quantity: 1
        }
        
        if (checkCart == null) {
            throw new Error("Cart is not Available")
        }
        else {
            let isTrue = false
            checkCart.books.filter(bookData => {
                if(bookData.productId == _id){
                   bookData.quantity = body.quantity ;
                   isTrue = true;
                   

                }
               
            })
            if(isTrue == false){
                checkCart.books.push(book)
            }
            const addbook = await cart.findOneAndUpdate({ userId: body.userId }, { books:checkCart.books}, { new: true });
            return addbook;            

        }
        
    }
}


export const removeBookFromCart = async(_id,body) =>{
        const checkCart = await cart.findOne({ userId: body.userId });
        if (checkCart) {
            let isTrue = false
            checkCart.books.filter(element => {
                if (element.productId == _id) {
                    let indexOfElement = checkCart.books.findIndex(element => element.books)
                    checkCart.books.pop(indexOfElement)
                    isTrue = true
                }
            });
            if (isTrue == false) {
                console.log("Book Doesn't Exists");
            }
    
            const updatedCart = await cart.findOneAndUpdate({ userId: body.userId}, { books: checkCart.books }, { new: true })
            return updatedCart
        } else {
            throw new Error("User cart doesn't exist");
        }
    };

    export const isPurchased = async(body) => {
        const data = await cart.findOneAndUpdate({userId: body.userId},{isPurchased:true},{new:true})
        if(data){
            return data;
        }
        else{
            throw new Error('No any cart found');
        }
    }
    