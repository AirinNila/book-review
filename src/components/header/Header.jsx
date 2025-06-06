import { NavLink } from "react-router-dom";
import './header.css'

const Header = () => {
   
    return (
      <nav className="container mx-auto">
        <div>
            <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a><NavLink to="/">Home</NavLink></a></li>
        <li><a><NavLink to="/listed">Listed Books</NavLink></a></li>
        <li><a><NavLink to="/read">Pages to Read</NavLink></a></li>
        <li><a><NavLink to="/fiction">Fiction</NavLink></a></li>
        <li><a><NavLink to="/nfiction">Non-Fiction</NavLink></a></li>
        
       
      </ul>
    </div>
    <a className="btn btn-ghost text-lg md:text-3xl">Book Review</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li><a><NavLink to="/">Home</NavLink></a></li>
        <li><a><NavLink to="/listed">Listed Books</NavLink></a></li>
        <li><a><NavLink to="/read">Pages to Read</NavLink></a></li>
        <li><a><NavLink to="/fiction">Fiction</NavLink></a></li>
        <li><a><NavLink to="/nfiction">Non-Fiction</NavLink></a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex items-center gap-2 ">
    <button className="btn primary-bg rounded-md md:text-base text-sm text-white">Sign in</button>
    <button className="btn bg-[#59C6D2] rounded-md md:text-base text-sm text-white">Sign Up</button>
    </div>
  </div>
</div>
        </div>
        </nav>
    );
};

export default Header;