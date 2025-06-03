import React, { useEffect, useState } from 'react';
import NFictionBook from '../nfictionBook/NFictionBook';

const Nfiction = () => {
       const [nFictionBooks, setNFictionBooks] = useState([])

        useEffect( () => {
            fetch('nFiction.json')
            .then(res => res.json())
            .then(data => setNFictionBooks(data))
        },[])
    return (
          <div className='container mx-auto'>
                <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="playf text-3xl font-bold">Books Card</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3"> 
                {
                   nFictionBooks.map(data => <NFictionBook key={data.bookId} data={data}></NFictionBook>)
                }
            </div>
             </div>
        </div>
    );
};

export default Nfiction;