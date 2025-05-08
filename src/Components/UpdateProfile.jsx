import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateProfile = () => {
  const { handleSignUp, updateUser, setUser, user } = useContext(AuthContext);

  const updateProfile = (event) => {
    event.preventDefault();
    const fullName = event.target.username.value;
    const photoUrl = event.target.photoUrl.value;
    // console.log(fullName, photoUrl);

    updateUser({ displayName: fullName, photoURL: photoUrl }).then(() => {
      setUser({ ...user, displayName: fullName, photoURL: photoUrl });
    });
  };

  return (
    <div>
      <h1 className="text-4xl mulish text-center font-bold">
        Update your profile
      </h1>
      <div class="flex flex-col md:gap-0 gap-5 md:flex-row p-10 rounded-3xl shadow-2xl w-full   mx-auto mt-9 mb-18 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
        {/* Left Side */}
        <div className="mulish w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <img
            src={user.photoURL}
            alt="Section visual"
            className="rounded-xl  h-52 w-52 mx-auto mb-4 transform hover:scale-105 transition duration-300"
          />
          <h2 className=" mulish text-gray-700 text-3xl font-bold text-center">
            {user.displayName}
          </h2>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-xl shadow-xl  transform hover:scale-105 transition duration-300">
          <form onSubmit={updateProfile} className="space-y-4">
            {/* Name */}
            <div class="mb-4 mulish">
              <label class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-700 font-medium mb-2">
                Name
              </label>
              <input
                name="username"
                id="username"
                type="text"
                placeholder="Your name"
                required
                class=" text-gray-800 placeholder-gray-500 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            {/* Photo URL */}
            <div class="mb-4 mulish">
              <label class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-700 font-medium mb-2">
                Photo URL
              </label>
              <input
                accept="image/*"
                name="photoUrl"
                id="photoUrl"
                type="text"
                placeholder="https://cdn.example.com/images/photo.jpg"
                class="text-gray-800 placeholder-gray-500 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <button
              type="submit"
              class="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-800 transform hover:scale-105 transition duration-300 font-semibold "
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
