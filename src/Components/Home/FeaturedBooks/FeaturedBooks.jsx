import PropTypes from "prop-types";
import Book from "../../Book/Book";
const FeaturedBooks = ({ books }) => {
    return (
        <section className="bg-white">
            <div className="container mx-auto py-[50px] px-4 md:py-[80px]">
                <h1 className="md: text-[40px] text-3xl text-center font-semibold mb-10 text-black">Books</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:w-9/12 mx-auto ">
                {
                    books.map(book => <Book book={book} key={book.id}></Book>)
                }
                </div>
            </div>
        </section>

    );
};
FeaturedBooks.propTypes = {
    books: PropTypes.array
};
export default FeaturedBooks;