import { useLoaderData } from "react-router";


const PagesToRead = () => {
    const books = useLoaderData()
    console.log(books);

    return (
        <div>
            <section className="h-[100vh] py-[80px] bg-[#F9F9FF]">
                <div className="container mx-auto text-center">
                    <h1 className="md:text-5xl text-4xl font-bold text-black">Pages To Read</h1>
                </div>
            </section>
            
        </div>
    );
};

export default PagesToRead;