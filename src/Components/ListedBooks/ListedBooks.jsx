import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { getStoredReadBook, getStoredWishListBook } from "../../utilities/localStorage";
import SingleReadAndWishListBook from "../SingleReadAndWishListBook/SingleReadAndWishListBook";
import './ListedBooks.css'
const ListedBooks = () => {

    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([])
    const [wishListBooks, setWishListBooks] = useState([])



    useEffect(() => {
        const storedReadBookIds = getStoredReadBook();
        const readBooks = [];

        for (const id of storedReadBookIds) {
            const readBook = books.find(book => book.id === id);
            if (readBook) {
                readBooks.push(readBook)
            }
        }
        setReadBooks(readBooks);



        // if(books.length > 0 ){
        //     const readBooks = books.filter(book => storedBookIds.includes(book.id))
        //     console.log(books, storedBookIds,readBooks);  
        // }
    }, [books])

    useEffect(() => {
        const storedWishListBooksIds = getStoredWishListBook()
        const wishlistBooks = [];

        for (const id of storedWishListBooksIds) {
            const wishlistBook = books.find(book => book.id === id)
            if (wishlistBook) {
                wishlistBooks.push(wishlistBook)
            }
        }

        setWishListBooks(wishlistBooks)
    }, [])



    return (
        <div>
            <section className="py-[80px] bg-[#F9F9FF]">
                <div className="container mx-auto text-center">
                    <h1 className="md:text-5xl text-4xl font-bold text-black">Books</h1>
                </div>
            </section>
            <section className="bg-white">
                <div role="tablist" className="tabs tabs-lifted container mx-auto py-[80px] ">
                    <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab text-lg"
                        aria-label="Read Books"

                    />
                    <div role="tabpanel" className="tab-content bg-white border-base-300 rounded-box p-6 border-none">
                        {
                            readBooks.map(book => <SingleReadAndWishListBook key={book.id} book={book}></SingleReadAndWishListBook>)
                        }
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab text-lg "
                        aria-label="Wishlist Books"
                        defaultChecked />
                    <div role="tabpanel" className="tab-content bg-white border-base-300 rounded-box p-6 border-none">
                        {
                            wishListBooks.map(book => <SingleReadAndWishListBook key={book.id} book={book}></SingleReadAndWishListBook>)
                        }
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ListedBooks;