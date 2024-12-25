
const ListedBooks = () => {
    return (
        <div>
            <section className="py-[80px] bg-[#F9F9FF]">
                <div className="container mx-auto text-center">
                    <h1 className="md:text-5xl text-4xl font-bold text-black">Books</h1>
                </div>
            </section>
            <section className="bg-white">
            <div role="tablist" className="tabs tabs-lifted container mx-auto py-[80px]">
                <input type="radio" name="my_tabs_2" role="tab" className="h-[60px] checked:bg-white bg-white tab font-semibold text-xl checked:text-white text-gray-500 " aria-label="Read Books" />
                <div role="tabpanel" className="bg-white tab-content  border-gray-300 rounded-box p-6">
                    Tab content 1
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="h-[60px] checked:bg-white bg-white tab font-semibold text-xl checked:text-white text-gray-500 " aria-label="Read Books" />
                <div role="tabpanel" className="bg-white tab-content  border-gray-300 rounded-box p-6">
                    Tab content 2
                </div>

                

                
            </div>
            </section>
            
        </div>
    );
};

export default ListedBooks;