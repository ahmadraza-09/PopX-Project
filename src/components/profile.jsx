import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null); // Set default to null to handle loading state
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login"); // Redirect to login if not logged in
    } else {
      const data = JSON.parse(localStorage.getItem("user"));
      if (data) {
        setUser(data);
      } else {
        console.error("User data not found in localStorage.");
      }
    }
  }, [navigate]);

  if (user === null) {
    return <div>Loading...</div>; // Show loading text while user data is being fetched
  }

  if (!user.fullName || !user.email) {
    return <div>Error: User data is missing.</div>; // If any user data is missing, show an error message
  }

  return (
    <div className="max-w-sm w-full h-screen p-4 m-auto bg-[#F7F8F9] flex flex-col justify-start">
      <div className="flex gap-4 items-start">
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/man/22.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-bold">{user.fullName}</h2>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700 text-sm leading-relaxed">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default Profile;
