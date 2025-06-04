import { IoLocationOutline , IoPeopleOutline} from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
const WishlistBook = ({data}) => {
    const {bookName, author, image, yearOfPublishing, publisher, totalPages, rating, category} = data;
    return (
        <div>
             <div className="flex flex-col gap-4 md:flex-row justify-center items-center text-center md:text-start md:justify-start md:items-start border-2 border-gray-300 rounded-lg p-4">
                                <div className="flex rounded-lg bg-gray-300 p-4 md:px-24 md:py-14 items-center justify-center">
                                    <img src={image} alt="" className="h-64 md:h-80 rounded-md" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="playf text-bold title text-2xl">{bookName}</h3>
                                    <p className="dest ">By: {author}</p>
                                    <div className='flex flex-col md:flex-row items-center gap-3 primary-c font-semibold'>
                                        <p className='bg-[#23BE0A0D] py-2 px-4 rounded-full flex items-center'>{data.tags[0]}</p>
                                        <p className='bg-[#23BE0A0D] py-2 px-4 rounded-full flex items-center'>{data.tags[1]}</p>
                                        <div className="flex items-center dest text-base gap-2">
                                            <p><IoLocationOutline /></p>
                                            <p className="dest">Year of publishing: {yearOfPublishing}</p>
                                        </div>                                    </div>
                                    <div className="flex items-center justify-center md:justify-start text-base text-[#13131399] gap-6 ">
                                        <div className="flex items-center gap-2">
                                            <p><IoPeopleOutline /></p>
                                            <p>{publisher}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p><RiPagesLine /></p>
                                            <p>{totalPages}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-full p-2 w-28 md:w-48 md:py-2 md:px-4 text-sm md:text-lg font-semibold bg-[#328EFF26] text-[#328EFF]"><button>Categoty:{category}</button></div>
                                        <div className="rounded-full py-2 px-4 text-sm md:text-lg font-semibold bg-[#FFAC3326] text-[#FFAC33]"><button>Rating: {rating}</button></div>
                                        <div className="rounded-full py-2 px-4 text-sm md:text-lg font-semibold bg-[#23BE0A26] text-[#23BE0A]"><button>View Details</button></div>
                                    </div>
                                </div>
            </div>
        </div>
    );
};

export default WishlistBook;