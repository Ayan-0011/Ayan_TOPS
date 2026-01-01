import { useNavigate } from "react-router-dom";
import { getData } from "../Context/DataContext";
import { useEffect } from "react";

export default function CategoryBanners() {
    const navigate = useNavigate();
    const { categoryData, fetchCategories } = getData();

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <section className="px-6 py-16 bg-white">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Shop by Category</h2>
                <p className="text-gray-500 mt-2">
                    Explore top categories curated for you
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryData?.map((cat, index) => (
                    <div
                        key={cat.id || index}
                        onClick={() => navigate(`/products?category=${cat.name}`)}
                        className="relative h-64 rounded-3xl overflow-hidden cursor-pointer group shadow-lg"
                    >
                        {/* Image */}
                        <img
                            src={cat.images}
                            alt={cat.name}
                            className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10"></div>

                        {/* Text */}
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-2xl font-bold">{cat.name}</h3>
                            <p className="text-sm opacity-90 mt-1">
                                Explore latest {cat.name}
                            </p>

                            <button
                                onClick={()=> navigate(`/category/${item.name}`)}
                                className="mt-4 bg-orange-500 px-5 py-2 rounded-xl text-sm font-semibold hover:bg-orange-600 transition"
                            >
                                Shop Now →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
