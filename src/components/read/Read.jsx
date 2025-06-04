import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../utility/booksList";
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const Read = () => {
    const allBooks = useLoaderData()
    const [readBooks, setReadBooks] = useState([])
    useEffect(() => {
        const readId = getStoredReadBook()
        const readedBooks = allBooks.filter(book => readId.includes(book.bookId))
        setReadBooks(readedBooks)

    }, [])

    // const customShapeBarChart = (
    //     <BarChart width={600} height={300} data={readBooks}>
    //          <XAxis dataKey={readBooks.bookName} />
    //           <YAxis />
    //           <Bar dataKey={readBooks.totalPages} fill="#8884d8"
    //   shape={<TriangleBar />} />
    //     </BarChart>

    // );
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return (
            <path
                d={`
        M${x},${y + height}
        L${x + width / 2},${y}
        L${x + width},${y + height}
        Z
      `}
                fill={fill}
            />
        );
    };

    console.log(readBooks)
    return (
        <div>
            <BarChart width={700} height={300} data={readBooks}>
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#23BE0A"
                    shape={<TriangleBar />} />
            </BarChart>
        </div>
    );
};

export default Read;