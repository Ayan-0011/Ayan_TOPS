import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center w-full">
        
        {/* GIF Background Section */}
        <div className="w-full h-[320px] md:h-[500px] bg-center bg-contain bg-no-repeat"
          style={{ backgroundImage: "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",}}/>

        {/* Content */}
        <div className="-mt-15">
          <h1 className="text-6xl font-extrabold text-gray-800">404</h1>

          <h3 className="text-2xl font-semibold mt-3 text-gray-700">
            Looks like you're lost
          </h3>

          <p className="text-gray-500 mt-2">
            The page you are looking for is not available.
          </p>

          <Link to="/"
            className="inline-block mt-6 px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition duration-300 shadow-md hover:scale-105">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
