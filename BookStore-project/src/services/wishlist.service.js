import Book from '../models/books.model';
import wishlist from '../models/wishlist.model'


export const addWishList = async (_id, body) => {
    const findBook = await Book.findById({ _id })
    let book = {
        productId: findBook._id,
        description: findBook.description,
        discountPrice: findBook.discountPrice,
        bookName: findBook.bookName,
        bookImage: findBook.bookImage,
        author: findBook.author,
        quantity:1,
        price:findBook.price
    }
    if (findBook) {
        const bookWishList = await wishlist.findOne({ userId: body.userId })
        if (bookWishList == null) {
            const createWishList = await wishlist.create({ userId: body.userId, books:[book],new: true })
            return createWishList;
        }
        else {
            let isTrue = false
            bookWishList.books.filter(bookData => {
                if (bookData.productId == _id) {
                    isTrue = true;
                    throw new Error('Book is already in the wish list')
                }
            })
            if(isTrue == false){
                bookWishList.books.push(book)
            }
            const updateWishList = await wishlist.findOneAndUpdate({ userId: body.userId }, { books: bookWishList.books }, { new: true })
            return updateWishList;
        }
    }
    else {
        console.log('Book is not present');
    }
}

export const getAllList = async(body) =>{
    const data = await wishlist.findOne({userId: body.EmailID})
    return data;
    
    
}

export const removeBookFromWishList = async(_id,body) =>{
    const findWishList = await wishlist.findOne({userId:body.userId})
    let isTrue = false
    if(findWishList){
        findWishList.books.filter(wishListItem =>{
            if(wishListItem.productId == _id){
                const indexValue = findWishList.books.findIndex(wishListItem => wishListItem.books)
                findWishList.books.pop(indexValue)
                isTrue = true
                console.log('Book removed from wish List');
            }
        });
        if(isTrue == false){
            console.log('Book is not available in wishList');
        }
        const updatedWishList = await wishlist.findOneAndUpdate({ userId: body.userId }, { books: findWishList.books}, { new: true });
        return updatedWishList;
    }
    else{
        console.log('No any wishList is Available');
    }
}