import BannerBookImage from '../../../assets/Images/pngwing 1@2x.png'

import { Link } from 'react-router';
const Banner = () => {
    return (
        <section className="pt-[50px] px-4 md:py-0 bg-[#fff]">
            <div className=" md:h-[80vh] banner-inner container mx-auto md:flex md:flex-row md:items-center  md:justify-between px-3 gap-5 text-center md:text-left bg-gray-200  md:px-10 py-8 rounded-xl ">
                <div className="left-content md:w-3/5">
                    <h1 className="text-black md:text-5xl text-3xl md:leading-[50px] font-bold">Books to freshen up your bookshelf</h1>
                    <p className='text-[#757575] my-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <Link to={'/listed-books'}>
                    <button className='py-3 px-6 font-semibold text-xl bg-[#23BE0A] hover:bg-black rounded text-white'>Get Started</button>
                    </Link>
                </div>
                <div className="right-content md:w-2/5 flex md:justify-end justify-center mt-5 md:mt-0">
                    <img src={BannerBookImage} className='w-[38%]  md:w-[89%] max-w-[100%]'/>
                </div>
            </div>

        </section>
    );
};

export default Banner;