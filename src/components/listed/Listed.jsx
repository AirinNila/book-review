import { SlArrowDown } from "react-icons/sl";
import { IoLocationOutline , IoPeopleOutline} from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
const Listed = () => {
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
                            <li><a>Rating</a></li>
                            <li><a>Number of Pages</a></li>
                            <li><a>Publisher year</a></li>
                        </ul>
                    </details>
                </div>
                <div>
                    {/* name of each tab group should be unique */}
                    <div className="tabs tabs-box">

                        <input type="radio" name="my_tabs_6" className="tab" aria-label="Read Books" defaultChecked />
                        <div className="tab-content bg-base-100 border-base-300 p-6">
                             <div className="flex flex-col gap-4 md:flex-row justify-start items-start border-2 border-gray-300 rounded-lg p-4">
                                <div className="flex rounded-lg bg-gray-300 p-4 md:p-8 items-center justify-center">
                                    <img src="" alt="" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="playf text-bold title text-2xl"></h3>
                                    <p className="dest ">By: </p>
                                    <div className='flex items-center gap-3 primary-c font-semibold'>
                                        <p className='bg-[#23BE0A0D] py-2 px-4 rounded-full flex items-center'></p>
                                        <p className='bg-[#23BE0A0D] py-2 px-4 rounded-full flex items-center'></p>
                                        <div className="flex items-center dest text-base gap-2">
                                            <p><IoLocationOutline /></p>
                                            <p className="dest">Year of publishing: </p>
                                        </div>                                    </div>
                                    <div className="flex items-center text-base text-[#13131399] gap-6 ">
                                        <div className="flex items-center gap-2">
                                            <p><IoPeopleOutline /></p>
                                            <p></p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p><RiPagesLine /></p>
                                            <p></p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-full py-2 px-4 text-lg font-semibold bg-[#328EFF26] text-[#328EFF]"><button>Categoty:</button></div>
                                        <div className="rounded-full py-2 px-4 text-lg font-semibold bg-[#FFAC3326] text-[#FFAC33]"><button>Rating:</button></div>
                                        <div className="rounded-full py-2 px-4 text-lg font-semibold bg-[#23BE0A26] text-[#23BE0A]"><button>View Details</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <input type="radio" name="my_tabs_6" className="tab" aria-label="Wishlist Books" />
                        <div className="tab-content bg-base-100 border-base-300 p-6">
                            <div className="flex flex-col gap-4 md:flex-row justify-start items-start border-2 border-gray-300 rounded-lg p-4">
                                <div className="flex rounded-lg bg-gray-300 p-4 md:p-8 items-center justify-center">
                                    <img src="" alt="" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="playf text-bold title text-2xl"></h3>
                                    <p className="dest ">By: </p>
                                    <div className='flex items-center gap-3 primary-c font-semibold'>
                                        <p className='bg-[#23BE0A0D] py-2 px-4 rounded-full flex items-center'></p>
                                        <p className='bg-[#23BE0A0D] py-2 px-4 rounded-full flex items-center'></p>
                                        <div className="flex items-center dest text-base gap-2">
                                            <p><IoLocationOutline /></p>
                                            <p className="dest">Year of publishing: </p>
                                        </div>                                    </div>
                                    <div className="flex items-center text-base text-[#13131399] gap-6 ">
                                        <div className="flex items-center gap-2">
                                            <p><IoPeopleOutline /></p>
                                            <p></p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p><RiPagesLine /></p>
                                            <p></p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-full py-2 px-4 text-lg font-semibold bg-[#328EFF26] text-[#328EFF]"><button>Categoty:</button></div>
                                        <div className="rounded-full py-2 px-4 text-lg font-semibold bg-[#FFAC3326] text-[#FFAC33]"><button>Rating:</button></div>
                                        <div className="rounded-full py-2 px-4 text-lg font-semibold bg-[#23BE0A26] text-[#23BE0A]"><button>View Details</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Listed;