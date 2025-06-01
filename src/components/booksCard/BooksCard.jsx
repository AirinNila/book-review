import { useEffect, useState } from "react";


const BooksCard = () => {
    const [books , setBooks] = useState([])
    useEffect( () => {
        fetch('book.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    console.log(books)
    return (
        <div className="container mx-auto mt-4">
            <div className="flex justify-center gap-4">
            <h2 className="playf text-3xl font-bold">Books Card</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3"> 

            </div>
            </div>
        </div>
    );
};

export default BooksCard;