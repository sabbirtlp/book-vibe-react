
const getStoredReadBook = () => {
    const storedReadBook = localStorage.getItem('read-book');
    if(storedReadBook){
        return JSON.parse(storedReadBook)
    }
    return [];
}

const saveReadBook = (id) =>{
    const storedReadBooks = getStoredReadBook();
    const exists = storedReadBooks.find(bookId => bookId === id); 
    if(!exists){
        storedReadBooks.push(id); 
        localStorage.setItem('read-book',JSON.stringify(storedReadBooks))
    }
};
//////////////////////////////////////////////////////////////////////////////////
const getStoredWishListBook = () => {
    const storedWishListBook = localStorage.getItem('wishlist-book');
    if(storedWishListBook){
        return JSON.parse(storedWishListBook)
    }
    return [];
}

const saveWishListBook = (id) =>{
    const storedWishListBooks = getStoredReadBook();
    const exists = storedWishListBooks.find(bookId => bookId === id); 
    if(!exists){
        storedWishListBooks.push(id); 
        localStorage.setItem('wishlist-book',JSON.stringify(storedWishListBooks))
    }
};


export {saveReadBook, getStoredReadBook, getStoredWishListBook,saveWishListBook};