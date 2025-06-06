import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { saveReadBook, saveWishlistBooks } from "../utility/booksList";
import { useState } from "react";

const BookDetails = () => {
    const book = useLoaderData()
    const [clicked, setClicked] = useState(false)
    const {id} = useParams()
   
    const currentBook = book.find(data => data.bookId === id)
    console.log(id)
    const handleReadbtn = () => {
        
        saveReadBook(id)
        setClicked(true)
        if(clicked === false){
            toast('Added on Read books')
        }
        else{
            toast('Already Added')
        }
        
    }
    const handleWishbtn = () => {
       
        saveWishlistBooks(id)
        setClicked(true)
        if(clicked === false){
            toast('Added on Wishlist')
        }
        else{
            toast('Already Added')
        }
        
    }
       
    return (
        <div className="container mx-auto">
            <div className="flex flex-col p-3 md:flex-row gap-4 md:items-start ">
                <div className="flex items-center justify-center bg-[#F3F3F3] rounded-md md:w-1/2 md:p-20  p-8">
                    <img src={currentBook.image} alt="" className="shadow-2xl" />
                </div>
                <div className="flex flex-col gap-4 md:w-1/2">
                    <h3 className="text-4xl playf font-extrabold text-center md:text-left">{currentBook.bookName}</h3>
                    <p className="dest font-semibold text-xl text-center md:text-left">By: {currentBook.author}</p>
                    <hr />
                    <p className="dest font-semibold text-xl text-center md:text-left">{currentBook.category}</p>
                    <hr />
                    <p className="des text-base text-center md:text-left"><span className="title font-bold ">Review</span>{currentBook.review}</p>
                    <div className='flex items-center gap-3 primary-c font-bold justify-center md:justify-start'>
                        <p className="title">Tag</p>
                            <p>#{currentBook.tags[0]}</p>
                            <p>#{currentBook.tags[1]} </p>
                        </div>
                        <hr />
                    <div className="flex flex-col gap-3 pl-4 md:pl-0 text-base">
                        <div className="flex items-center gap-6 ">
                            <p className="des">Number of page;</p>
                            <p className="title font-semibold">{currentBook.totalPages}</p>
                        </div>
                        <div className="flex items-center gap-6 ">
                            <p className="des">Publisher:</p>
                            <p className="title font-semibold">{currentBook.publisher}</p>
                        </div>
                        <div className="flex items-center gap-6 ">
                            <p className="des">Year of Publishing:</p>
                            <p className="title font-semibold">{currentBook.yearOfPublishing}</p>
                        </div>
                        <div className="flex items-center gap-6 ">
                            <p className="des">Rating:</p>
                            <p className="title font-semibold">{currentBook.rating}</p>
                        </div>
                    </div>
                    <div className="flex items-center pl-4 md:pl-0 text-lg gap-4">
                        <div className="grid place-items-center">
                            <button onClick={handleReadbtn} className="btn border-2 border-gray-300 title font-semibold p-4">Read</button>
                            <ToastContainer/>
                        </div>
                        <div className="grid place-items-center">
                            <button onClick={handleWishbtn} className="btn bg-[#50B1C9] text-white rounded-md p-4">Wishlist</button>
                        <ToastContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;