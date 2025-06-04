import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../utility/booksList";
import { BarChart, Bar, XAxis, YAxis , ResponsiveContainer } from 'recharts';

const Read = () => {
    const allBooks = useLoaderData()
    const [readBooks, setReadBooks] = useState([])
    useEffect(() => {
        const readId = getStoredReadBook()
        const readedBooks = allBooks.filter(book => readId.includes(book.bookId))
        setReadBooks(readedBooks)

    }, [])


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
            <ResponsiveContainer width="80%" height={300} >
            <BarChart data={readBooks}>
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#23BE0A"
                    shape={<TriangleBar />} />
            </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Read;