import { LuUsers } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";


import PropTypes from "prop-types";
import { Link } from "react-router";
const SingleReadAndWishListBook = ({book}) => {
    const {image,title,author,tags,id,details,genre} = book;
    const {publisher,number_of_pages, year_of_publishing,rating} = details;
    return (
        <div className="flex md:flex-row flex-col justify-start  gap-4 border-gray-200 my-4 rounded-lg border px-4 py-5">
            <div className="left-content py-5 px-4 bg-gray-200 rounded-md">
                <img src={image} alt={title} />
            </div>
            <div className="right-content">
                <h2 className="text-[24px] font-bold text-black">{title}</h2>
                <p className="text-md text-black"><strong>By: </strong>{author}</p>
                <div className="flex md:flex-row flex-col gap-3 md:items-center border-b pb-4 items-start" >
                        <span className="text-black text-xl mt-3"><strong>Tags:</strong></span>
                        <ul className="flex gap-3 mt-3">
                            {tags.map(tag => <li className="text-[#23BE0A] rounded-md font-semibold bg-[#F4FCF3] px-3 py-2" key={id}>{tag}</li>)}
                        </ul>

                        <div className="mt-[15px] flex justify-between items-center">
                            <h4 className="text-black font-semibold text-md">Year of Publishing: </h4>
                            <p className="text-black font-semibold"> {year_of_publishing}</p>
                        </div>
                    </div>
                    <div className="flex gap-5 ">
                        <div className="flex justify-start gap-2 items-center text-black">
                        <LuUsers />
                        <p>Publisher: {publisher}</p>
                        </div>
                        
                        <div className=" text-black flex justify-start gap-2 items-center">
                        <IoBookOutline />
                        <p>Pages: {number_of_pages}</p>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="flex justify-start items-center gap-3">
                        <button className="btn text-[#328EFF] bg-[#E0EEFF] border-none ">Category: {genre}</button>
                        <button className="btn text-[#FFAC33] bg-[#FFF3E0] border-none">Rating: {rating}</button>
                        <Link to={`/book/${id}`} ><button className="btn bg-[#23BE0A] border-none text-white">View Details</button></Link>
                    </div>
            </div>
        </div>
    );
};
SingleReadAndWishListBook.propTypes = {
    book:PropTypes.object.isRequired
}
export default SingleReadAndWishListBook;