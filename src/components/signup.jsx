import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (form.fullName && form.email && form.password && form.phone) {
      localStorage.setItem("user", JSON.stringify(form));
      navigate("/login");
    } else {
      alert("Please fill all required fields");
    }
  };

  return (
    <div className="max-w-sm mx-auto h-screen p-4 bg-[#F7F8F9] flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-4 text-black">PopX account</h1>

      <label className="text-sm font-medium text-[#6C25FF]">
        Full Name<span className="text-red-500">*</span>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md"
        />
      </label>

      <label className="text-sm font-medium text-[#6C25FF] mt-4">
        Phone number<span className="text-red-500">*</span>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md"
        />
      </label>

      <label className="text-sm font-medium text-[#6C25FF] mt-4">
        Email address<span className="text-red-500">*</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md"
        />
      </label>

      <label className="text-sm font-medium text-[#6C25FF] mt-4">
        Password<span className="text-red-500">*</span>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md"
        />
      </label>

      <label className="text-sm font-medium text-[#6C25FF] mt-4">
        Company name
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-md"
        />
      </label>

      <div className="mt-4 text-sm font-medium text-gray-700">
        Are you an Agency?<span className="text-red-500">*</span>
        <div className="flex items-center gap-6 mt-2">
          <label className="flex items-center gap-2 text-black">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={form.isAgency === "yes"}
              onChange={handleChange}
              className="accent-[#6C25FF]"
            />
            Yes
          </label>
          <label className="flex items-center gap-2 text-black">
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={form.isAgency === "no"}
              onChange={handleChange}
              className="accent-[#6C25FF]"
            />
            No
          </label>
        </div>
      </div>

      <button
        className="mt-6 bg-[#6C25FF] hover:bg-[#5a1ce0] py-2 font-semibold w-full text-white rounded-md"
        onClick={handleSubmit}
      >
        Create Account
      </button>
    </div>
  );
};

export default Signup;
