import React, { useContext, useState } from "react";
import { signup } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const { mutate } = useMutation({
    mutationKey: ["signup"],
    mutationFn: () => signup(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/notes");
    },
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();

    mutate();
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-md">
        <h2 className="text-3xl text-white font-semibold mb-6">Sign In</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-white text-sm font-medium mb-2"
            >
              username
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium mb-2"
            >
              password
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;


