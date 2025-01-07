import { useLoaderData } from "react-router";
import { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getStoredReadBook } from "../../utilities/localStorage";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust threshold for mobile
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once to set the initial state

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const storedReadBookIds = getStoredReadBook();
        const readBooks = [];

        for (const id of storedReadBookIds) {
            const readBook = books.find(book => book.id === id);
            if (readBook) {
                readBooks.push(readBook);
            }
        }
        setReadBooks(readBooks);
    }, [books]);

    return (
        <div>
            <section className="py-[80px] bg-[#F9F9FF]">
                <div className="container mx-auto text-center">
                    <h1 className="md:text-5xl text-4xl font-bold text-black">Pages To Read</h1>
                </div>
            </section>
            <div className="bg-white py-20">
                <div className="container mx-auto">
                    <ResponsiveContainer width="100%" height={550}>
                        <BarChart
                            data={readBooks}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis 
                                dataKey="title" 
                                angle={isMobile ? -45 : 0} 
                                textAnchor={isMobile ? "end" : "middle"} 
                            />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="details.number_of_pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {readBooks.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default PagesToRead;
