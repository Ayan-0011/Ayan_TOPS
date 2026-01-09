import axios from "axios";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { BiTransfer } from "react-icons/bi";
import { toast } from "react-toastify";

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

    const deleteFB = async (id) => {
        const res = await axios.delete(`http://localhost:5000/Feedback/${id}`)
        toast.success("Feedback deleted ~ ")
        setFeedbacks(res.data)
        getFeedbacks()
    }

    useEffect(() => {
        getFeedbacks();
        deleteFB();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="md:text-3xl text-2xl font-bold mb-6 text-gray-800">📩 User Feedback</h1>

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
                                <img src={item.img ||"https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="} alt={item.name} className="w-12 h-12 rounded-full object-cover border" />

                                <div>
                                    <h2 className="text-base font-semibold text-gray-800">
                                        {item.name}
                                    </h2>
                                    <p className="text-xs text-gray-500">{item.email}</p>
                                </div>
                            </div>

                            {/* Message */}
                            <p className="mt-4 text-gray-700 text-md">
                                “{item.msg}”
                            </p>

                            {/* Date */}
                            <p className="mt-4 mb-5 text-xs text-gray-400 text-right">
                                {item.date
                                    ? new Date(item.date).toLocaleString()
                                    : new Date(item.createdAt).toLocaleString()}
                            </p>
                            <button onClick={()=> deleteFB(item.id)}
                                className="flex cursor-pointer items-center gap-1 px-3 py-2 text-sm font-medium  text-red-600 border border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition" >
                                <Trash2 size={18} /> Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Feedback;
