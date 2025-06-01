import { useEffect, useState } from "react";
import BookCard from "../bookCard/bookCard";


const BooksCard = () => {
    const [books , setBooks] = useState([])
    useEffect( () => {
        fetch('book.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    const handleShowAllBtn = () => {
        
    }
   
    return (
        <div className="container mx-auto mt-4">
            <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="playf text-3xl font-bold">Books Card</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3"> 
                {
                    books.slice(0,6).map(data => <BookCard key={data.bookId} data={data}></BookCard>)
                }
            </div>
            <button className="btn primary-bg p-4 text-white">Show All</button>
            </div>
        </div>
    );
};

export default BooksCard;