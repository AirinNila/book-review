import { SlArrowDown } from "react-icons/sl";

import { useLoaderData } from "react-router-dom";
import { getStoredReadBook, getStoredWishlisttBooks } from "../utility/booksList";
import { useEffect, useState } from "react";
import ReadBook from "../readBook/ReadBook";
import WishlistBook from "../wishlistBook/WishlistBook";
const Listed = () => {
    const allBooks = useLoaderData()
    const [readBooks, setReadBooks] = useState([])
    const [wishlistBooks, setWishlistBooks] = useState([])
    const [sortRating , setSortRating] = useState('')
   
    
    
   
    useEffect( () => {
        const wishlistId = getStoredWishlisttBooks()
        const wishlistBooks = allBooks.filter(book => wishlistId.includes(book.bookId))
        setWishlistBooks(wishlistBooks)
    } ,[])

    useEffect( () => {
        const readId = getStoredReadBook()
         if(allBooks.length > 0){
        const readBooks = allBooks.filter(book => readId.includes(book.bookId))
        setReadBooks(readBooks)
        
    }
    },[])

    const handleRating = type => {
        
       
        setSortRating(type)
        if(type === 'Rating'){
            const sorted = [...readBooks].sort((a,b) => b.rating-a.rating)
            setReadBooks(sorted)
            const wSorted = [...wishlistBooks].sort((a,b) => b.rating-a.rating)
            setWishlistBooks(wSorted)
        }
        if(type === 'nbrPage'){
            const sorted = [...readBooks].sort((a,b) => a.totalPages-b.totalPages)
            setReadBooks(sorted)
            const wSorted = [...wishlistBooks].sort((a,b) => a.totalPages-b.totalPages)
            setWishlistBooks(wSorted)
        }
        if(type === 'year'){
            const sorted = [...readBooks].sort((a,b) => a.yearOfPublishing-b.yearOfPublishing)
            setReadBooks(sorted)
            const wSorted = [...wishlistBooks].sort((a,b) => a.yearOfPublishing-b.yearOfPublishing)
            setWishlistBooks(wSorted)
        }
    }
     
    return (
        <div className="container mx-auto  mt-6">
            <div className="flex flex-col justify-center items-center gap-4 ">
                <div className="flex justify-center items-center p-4 w-full md:p-10 bg-[#1313130D] rounded-lg">
                    <h3 className="text-2xl font-extrabold title">Books</h3>
                </div>
                <div>
                    <details className="dropdown">
                        <summary className="btn bg-[#23BE0A] text-white text-lg font-semibold m-1">
                            <div className="flex items-center gap-2"><p>Sort By</p>
                                <p className="text-sm"><SlArrowDown /></p>
                            </div> </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm des text-base">
                            <li><button onClick={() => handleRating('Rating')}>Rating</button></li>
                            <li><button onClick={() => handleRating('nbrPage')}>Number of Pages</button></li>
                            <li><button onClick={() => handleRating('year')}>Publisher year</button></li>
                        </ul>
                    </details>
                </div>
                <div>
                    {/* name of each tab group should be unique */}
                    <div className="tabs tabs-box">

                        <input type="radio" name="my_tabs_6" className="tab" aria-label="Read Books" defaultChecked />
                        <div className="tab-content bg-base-100 border-base-300 p-6">
                            <div className="flex flex-col gap-6">
                             {
                                readBooks.map(data => <ReadBook key={data.bookId} data={data}></ReadBook>)
                             }
                             </div>
                        </div>

                        <input type="radio" name="my_tabs_6" className="tab" aria-label="Wishlist Books" />
                        <div className="tab-content bg-base-100 border-base-300 p-6">
                            <div className="flex flex-col gap-6">
                           {
                            wishlistBooks.map(data => <WishlistBook  key={data.bookId} data={data}></WishlistBook>)
                           }
                           </div>
                        </div>

                        

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Listed;