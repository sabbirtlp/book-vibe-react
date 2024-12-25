import { useLoaderData, useParams } from "react-router";
import { Link } from "react-router";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)

    const book = books.find(book => book.id === idInt)
    console.log(book);

    const { author, details, genre, image, review, tags, title } = book;

    const { number_of_pages, rating, publisher, year_of_publishing } = details;



    return (
        <div className="bg-white">
            <div className="container  py-8 mx-auto flex md:flex-row gap-5 flex-col justify-between w-9/12 items-start">
                <div className="rounded-xl py-8 px-8 bg-gray-200 md:w-6/12 md:h-[700px]">
                    <img className="" src={image} alt={title} />
                </div>
                <div className="md:w-6/12 py-5 px-4">
                    <h1 className="md:text-[36px] text-3xl font-semibold text-black">{title}</h1>
                    <p className="text-xl text-black mt-4"><strong>By</strong>: {author}</p>
                    <p className="text-xl border-t border-b py-4 my-4 text-black">{genre}</p>
                    <p className="text-xl border-t border-b py-4 my-4 text-black">{review}</p>
                    <div className="flex gap-3 items-center border-b pb-4" >
                        <span className="text-black text-xl mt-3"><strong>Tags:</strong></span>
                        <ul className="flex gap-3 mt-3">
                            {tags.map(tag => <li className="text-[#23BE0A] rounded-md font-semibold bg-[#F4FCF3] px-3 py-2" key={id}>{tag}</li>)}
                        </ul>

                    </div>
                    <div className="details md:w-6/12 py-5">
                        <div className="flex justify-between">
                            <h4 className="text-black font-semibold text-lg">Number of Pages: </h4>
                            <p className="text-black font-semibold">{number_of_pages}</p>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="text-black font-semibold text-lg">Publisher: </h4>
                            <p className="text-black font-semibold">{publisher}</p>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="text-black font-semibold text-lg">Year of Publishing: </h4>
                            <p className="text-black font-semibold">{year_of_publishing}</p>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="text-black font-semibold text-lg">Rating: </h4>
                            <p className="text-black font-semibold">{rating}</p>
                        </div>

                    </div>
                    <div className="flex px-3 py-3 gap-3 items-center">
                        <Link><button className="btn bg-transparent border border-gray-300 rounded-md text-black text-xl hover:text-white">Read</button></Link>
                        <Link><button className="btn bg-[#50B1C9] text-white border border-[#50B1C9] text-xl ">Wishlist</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;