import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-sm w-full h-screen p-4 m-auto bg-[#F7F8F9] flex flex-col justify-center">
      <h1 className="text-black text-2xl font-bold font-sans mb-1">
        Welcome to PopX
      </h1>
      <p className="text-gray-500 text-sm mb-4">
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
      </p>

      <button
        className="bg-[#6C25FF] hover:bg-[#5a1ce0] py-2 font-semibold w-full text-white rounded-md mb-2"
        onClick={() => navigate("/signup")}
      >
        Create Account
      </button>
      <button
        className="bg-[#CEBAFB] hover:bg-[#bda5f7] py-2 font-semibold w-full text-black rounded-md"
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>
    </div>
  );
};

export default Welcome;
