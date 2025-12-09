import { useEffect } from "react"
import { getData } from "../Context/DataContext"
// usecontext ko getData me store kiyaa he


const Category = () => {

    const { data, FetchAllproducts } = getData()

    // filter categorys from products
    const categoryWiseData = data?.reduce((acc, item) => {
        const name = item.category.name;
        acc[name] = acc[name] || [];
        acc[name].push(item);
        return acc;
    }, {});


    useEffect(() => {
        FetchAllproducts()
    }, []);


    return (
        <div className="bg-[#101829]">
            <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4">
                {categoryWiseData &&
                    Object.keys(categoryWiseData).map((categoryName, index) => (
                        <button
                            key={index}
                            className="uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer">
                            {categoryName}
                        </button>
                    ))}
            </div>
        </div>

    )
}


export default Category
