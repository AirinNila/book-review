import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../utility/booksList";

const Read = () => {
    const allBooks = useLoaderData()
    const [readBooks, setReadBooks] = useState([])
    useEffect( () => {
        const readId = getStoredReadBook()
        const parsId = parseInt(readId)
        const readedBooks = allBooks.filter(book => readId.includes(book.bookId))
        setReadBooks(readedBooks)
        console.log(readBooks, readId, parsId)
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Read;