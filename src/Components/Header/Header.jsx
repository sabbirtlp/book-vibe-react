import { Link, NavLink } from 'react-router';
import './Header.css'

const Header = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to="/listed-books">Listed Books</NavLink></li>
        <li><NavLink to="/pages-to-read">Pages To Read</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (

        <div className="bg-[#fff] py-5">
            <div className="navbar container mx-auto  flex">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/'>
                        <a className="btn btn-ghost text-xl md:text-3xl font-bold text-black">Book <span className="gradient_text">Vibe</span></a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-lg text-[#757575] gradient_text_hover">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={''}>
                        <a className="md:text-lg text-sm border-none btn text-white bg-[#23BE0A] hover:bg-[#000] mr-4">Sign In</a>
                    </Link>
                    <Link to={''}>
                        <a className="md:text-lg text-sm border-none btn bg-[#59C6D2] text-white hover:bg-[#000000]">Sign Up</a>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Header;