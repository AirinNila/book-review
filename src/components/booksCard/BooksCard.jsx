import { useEffect, useState } from "react";
import BookCard from "../bookCard/bookCard";


const BooksCard = () => {
    const [books , setBooks] = useState([])
    useEffect( () => {
        fetch('book.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    const [seeAll, setSeeAll] = useState(6)

 
   
    return (
        <div className="container mx-auto mt-4">
            <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="playf text-3xl font-bold">Books Card</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3"> 
                {
                    books.slice(0,seeAll).map(data => <BookCard key={data.bookId} data={data}></BookCard>)
                }
            </div>
            <div className={seeAll === books.length && 'hidden'}>
            <button onClick={() => setSeeAll(books.length)} className="btn primary-bg p-4 text-white">Show All</button>
            </div>
            </div>
        </div>
    );
};

export default BooksCard;