import { FaRegStar } from "react-icons/fa6";

const NFictionBook = ({data}) => {
      const {bookName, author, publishYear, rating, image} = data;
    return (
        <div>
            <div className='flex flex-col p-4 rounded-md border-2 border-[#13131326] gap-4'>
                                           <div className='flex justify-center items-center bg-[#F3F3F3] rounded-md h-64'>
                                           <img src={image} alt="" className='w-32 shadow-xl' />
                                           </div>
                                           <div className='flex flex-col gap-3 '>
                                               <div className='flex items-center gap-3 primary-c font-semibold'>
                                                   <p className='bg-[#23BE0A0D] py-2 px-4 rounded-full flex items-center'>{data.tags[0]}</p>
                                                   <p className='bg-[#23BE0A0D] py-2 px-4 rounded-full flex items-center'>{data.tags[1]} </p>
                                               </div>
                                               
                                               <h2 className='font-bold text-2xl'>{bookName}</h2>
                                               <p className='font-semibold'>By: {author}</p>
                                               <hr />
                                               <div className='flex items-center justify-between'>
                                                   <p>{publishYear}</p>
                                                   
                                                   <div className='flex items-center gap-2'>
                                                       <p>{rating}</p>
                                                       <p><FaRegStar /></p>
                                                   </div>
                                                   
                                               </div>
                                           </div>
                                       </div>
        </div>
    );
};

export default NFictionBook;