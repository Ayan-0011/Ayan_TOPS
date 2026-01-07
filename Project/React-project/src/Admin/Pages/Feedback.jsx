import axios from "axios";
import { useEffect, useState } from "react";

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);

    const getFeedbacks = async () => {
        try {
            const res = await axios.get("http://localhost:5000/Feedback");
            setFeedbacks(res.data.reverse()); // latest first
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getFeedbacks();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">📩 User Feedback</h1>

            {/* Loading */}
            {loading && <p className="text-center text-gray-500">Loading feedback...</p>}

            {/* No Feedback */}
            {!loading && feedbacks.length === 0 && (
                <p className="text-center text-gray-500">No feedback found</p>
            )}

            {/* Feedback List */}
            {!loading && feedbacks.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {feedbacks.map((item) => (
                        <div key={item._id}
                            className="bg-white rounded-2xl border-s-4 border-blue-500 shadow-md p-5 hover:shadow-xl transition relative" >
                            {/* User Info */}
                            <div className="flex items-center gap-3">
                                <img src={item.img || "https://via.placeholder.com/40"} alt={item.name} className="w-12 h-12 rounded-full object-cover border" />

                                <div>
                                    <h2 className="text-base font-semibold text-gray-800">
                                        {item.name}
                                    </h2>
                                    <p className="text-xs text-gray-500">{item.email}</p>
                                </div>
                            </div>

                            {/* Message */}
                            <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                                “{item.msg}”
                            </p>

                            {/* Date */}
                            <p className="mt-4 text-xs text-gray-400 text-right">
                                {item.date
                                    ? new Date(item.date).toLocaleString()
                                    : new Date(item.createdAt).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Feedback;
