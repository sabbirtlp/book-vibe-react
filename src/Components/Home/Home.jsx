import Banner from "./Banner/Banner";
import { useEffect, useState } from "react";
import FeaturedBooks from "./FeaturedBooks/FeaturedBooks";

const Home = () => {
    const [books,setBooks] = useState([]); 
    
    
    
    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className="">
            <Banner></Banner>
            <FeaturedBooks books={books}></FeaturedBooks>
        </div>
    );
};

export default Home;