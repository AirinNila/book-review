import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { saveReadBook } from "../utility/booksList";

const BookDetails = () => {
    const book = useLoaderData()

    const {id} = useParams()
   
    const currentBook = book.find(data => data.bookId === id)
    const handleReadbtn = () => {
        saveReadBook(id)
        toast('Added on Read books')
    }
    const handleWishbtn = () => {
        toast('Added on Wishlist')
    }
       
    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-4 md:items-start ">
                <div className="flex items-center justify-center bg-[#F3F3F3] rounded-md md:w-1/2 md:p-20  p-8">
                    <img src={currentBook.image} alt="" className="shadow-2xl" />
                </div>
                <div className="flex flex-col gap-4 md:w-1/2">
                    <h3 className="text-4xl playf font-extrabold">{currentBook.bookName}</h3>
                    <p className="dest font-semibold text-xl">By: {currentBook.author}</p>
                    <hr />
                    <p className="dest font-semibold text-xl">{currentBook.category}</p>
                    <hr />
                    <p className="des text-base"><span className="title font-bold">Review</span>{currentBook.review}</p>
                    <div className='flex items-center gap-3 primary-c font-bold'>
                        <p className="title">Tag</p>
                            <p>#{currentBook.tags[0]}</p>
                            <p>#{currentBook.tags[1]} </p>
                        </div>
                        <hr />
                    <div className="flex flex-col gap-3 text-base">
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
                    <div className="flex items-center text-lg gap-4">
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