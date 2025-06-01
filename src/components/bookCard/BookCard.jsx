
import { Link } from 'react-router-dom';

const BookCard = ({data}) => {
    const {bookName, author, image, category, rating, bookId} = data
    return (
        <div>
            <Link to={`/bookDetailes/${bookId}`}>
                <div className='flex flex-col p-4 rounded-md border-2 border-[#13131326] gap-4'>
                    <div className='flex justify-center items-center bg-[#F3F3F3] rounded-md h-64'>
                    <img src={image} alt="" className='w-32 shadow-xl' />
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <div className='flex items-center gap-3 primary-c'>
                            <p>{data.tags[0]}</p>
                            <p>{data.tags[1]} </p>
                        </div>
                        <h2 className='font-bold text-2xl'>{bookName}</h2>
                        <p className='font-semibold'>By: {author}</p>
                        <div className='flex items-center justify-between'>
                            <p>{category}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;