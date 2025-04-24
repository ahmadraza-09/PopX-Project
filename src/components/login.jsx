import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      if (storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/profile");
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("No registered user found");
    }
  };

  return (
    <div className="max-w-sm w-full border h-screen p-4 m-auto bg-[#F7F8F9] flex flex-col justify-center">
      <h1 className="text-black text-xl font-bold font-sans mb-1">
        PopX account
      </h1>
      <p className="text-gray-500 text-sm mb-4">
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit.
      </p>

      <label
        className="text-sm font-semibold text-[#6C25FF] mb-1 mt-2"
        htmlFor="email"
      >
        Email Address
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter email address"
        className="border rounded-md p-2 text-sm mb-3 outline-[#6C25FF]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label
        className="text-sm font-semibold text-[#6C25FF] mb-1"
        htmlFor="password"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="Enter password"
        className="border rounded-md p-2 text-sm mb-4 outline-[#6C25FF]"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className={`p-2 rounded-md font-semibold text-white ${
          isFormValid ? "bg-[#6C25FF]" : "bg-[#C9C9C9]"
        }`}
        disabled={!isFormValid}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
