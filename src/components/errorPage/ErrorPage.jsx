import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center'>
            <h2 className='text-2xl md:text-4xl font-semibold title'>Not found Page!</h2>
            <Link to="/"> <button className='btn btn-primary'>Go to Home</button></Link>
        </div>
    );
};

export default ErrorPage;