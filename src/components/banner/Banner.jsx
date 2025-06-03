import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='container mx-auto playf'>
            <div className="hero bg-[#1313130D] min-h-screen rounded-xl">
  <div className="hero-content flex-col gap-8 lg:flex-row-reverse">
    <img
      src="https://i.pinimg.com/736x/32/4d/f3/324df3d74916177835279c6e642967c8.jpg"
      className="max-w-72 md:max-w-94 rounded-lg"
    />
    <div className='flex flex-col gap-4 pl-4'>
      <h1 className="text-4xl md:text-6xl font-bold ">Books to freshen up <br /> your bookshelf</h1>
        <div>
            <Link to="/listed">
      <button className="btn primary-bg p-4 rounded-md text-white works">View The List</button></Link>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;