import React, { useEffect, useState } from 'react';
import FictionBook from '../fictonBook/FictionBook';

const Fiction = () => {
    const [fictionBooks, setFictionBooks] = useState([])
    useEffect( () => {
        fetch('fiction.json')
        .then(res => res.json())
        .then(data => setFictionBooks(data))
    } ,[])

    return (
        <div className='continer mx-auto'>
              <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="playf text-3xl font-bold">Books Card</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3"> 
                {
                   fictionBooks.map(data => <FictionBook key={data.id} data={data}></FictionBook>)
                }
            </div>
             </div>
        </div>
    );
};

export default Fiction;