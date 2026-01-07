
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  const [message, setMessage] = useState({
    id: "",
    name: "",
    img: "",
    email: "",
    msg: "",
    date: "",
  });

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      setMessage((prev) => ({
        ...prev,
        id: user.id,
        name: user.fullName || "",
        email: user.primaryEmailAddress?.emailAddress || "",
        img: user.imageUrl || "",
        date: new Date().toISOString(), // 👈 DATE ADDED
      }));
    }
  }, [isLoaded, isSignedIn, user]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/Feedback", message);
      toast.success("Thanks for feedback ❤️");

      setMessage((prev) => ({
        ...prev, msg: "",
        date: new Date().toISOString(),
      }));
    } catch (error) {
      toast.error("Something went wrong ");
      console.log(error);
    }
  };

  const dataHandler = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value, });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-10">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          Get in Touch with <span className="text-red-400">Zaptro</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info */}
          <div className="text-white space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Contact Info</h3>
              <p className="text-gray-300">Have a question or need support? We're here to help you with your electronics journey.</p>
            </div>
            <div>
              <p><strong>📍 Address:</strong> 123 Tops tech, Maninager, India</p>
              <p><strong>📧 Email:</strong> support@zaptro.com</p>
              <p><strong>📞 Phone:</strong> +91 70431 24577</p>
            </div>
          </div>
          {/* Form */}
          <form onSubmit={submitHandler} className="space-y-6">

            <input type="text" name="name" value={message.name} onChange={dataHandler} className="w-full p-2 rounded-xl bg-white/20 text-white" />

            <input type="email" name="email" value={message.email} onChange={dataHandler} className="w-full p-2 rounded-xl bg-white/20 text-white" />

            <textarea name="msg" rows="4" value={message.msg} onChange={dataHandler} className="w-full p-2 rounded-xl bg-white/20 text-white" />

            <button type="submit" className="w-full bg-gradient-to-r from-red-500 to-purple-500 py-2 rounded-xl">Send Message 🚀</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;