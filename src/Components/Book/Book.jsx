import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

import PropTypes from "prop-types";
const Book = ({book}) => {
    const {title, image,tags,id,author,genre,details} = book;
    const {rating} = details;
    
    return (
        <div className="pt-8 pb-4 px-6 shadow-lg rounded-md hover:shadow-md ">
            <div className="px-4 py-10 bg-gray-100 rounded-md w-full h-auto mx-auto flex flex-col justify-center items-center">
            <img className="" src={image} alt={title}/>
            </div>
            <div>
                <ul className="flex gap-3 mt-3">
                {tags.map(tag => <li className="text-[#23BE0A] rounded-md font-semibold bg-[#F4FCF3] px-3 py-2" key={id}>{tag}</li>)}
                </ul>
                
            </div>
            <Link to={`/book/${id}`}><h1  className="text-[22px] font-semibold text-black py-3"> {title}</h1></Link>
            <p className="text-black mb-4">By: {author}</p>

            <div className="px-3 py-4 flex justify-between items-center border-t-2  border-dotted">
                    <p>{genre}</p>
                    <div className="flex justify-between items-center gap-1">
                        <p>{rating}</p>
                        <FaRegStar />
                    </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book:PropTypes.object
}
export default Book;