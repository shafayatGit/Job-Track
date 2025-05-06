import React, { useContext } from "react";
import Navber from "../Components/Navber";
import { valueContext } from "../MainLayout/MainLayout";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { IoIosCheckmarkCircle } from "react-icons/io";

const SignUp = () => {
  const { handleSignUp } = useContext(valueContext);
  // console.log(handleSignUp);
  const handleSubmit = (event) => {
    event.preventDefault();
    // const fullName = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    handleSignUp(email, password);

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: '<p class="font-bold">Length must be at least 6 characters!</p>',
      });
      return;
    }
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title:
          '<p class="font-bold">password must be matched with confirmed password</p>',
      });

      return;
    }
    if (!/[a-z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title:
          '<p class="font-bold">Must have a Lowercase letter in the password</p>',
      });

      return;
    }
    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title:
          '<p class="font-bold">Must have an Uppercase letter in the password</p>',
      });

      return;
    }

    toast(
      <div className="flex items-center gap-2">
        <IoIosCheckmarkCircle
          size={25}
          className="text-green-700"
        ></IoIosCheckmarkCircle>
        <p className="text-black mulish font-base text-[18px]">
          Logged In Successfully!
        </p>
      </div>
    );
  };

  return (
    <div>
      <div class=" p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition duration-500 hover:-translate-y-2 hover:shadow-3xl mx-auto mt-9 mb-18 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>
          {/* <!-- Google Login --> */}
          <button class=" cursor-pointer w-full flex items-center justify-center gap-3 bg-white border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              class="w-5 h-5"
            />
            <span class="text-sm font-medium text-gray-700 ">
              Continue with Google
            </span>
          </button>
          <div class="my-6 flex items-center">
            <hr class="flex-grow border-gray-300" />
            <span class="px-4 text-gray-500 text-sm">or</span>
            <hr class="flex-grow border-gray-300" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Name</label>
            <input
              name="username"
              id="username"
              type="text"
              placeholder="Your name"
              class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* <!-- Email --> */}
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="you@example.com"
              class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* <!-- Password --> */}
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* <!-- Confirm Password --> */}
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              placeholder="********"
              class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* <!-- Forgot password --> */}
          <div class="text-right mb-4">
            <a href="#" class="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-800 transform hover:scale-105 transition duration-300 font-semibold "
          >
            Register
          </button>
        </form>
        {/* <!-- Divider --> */}
      </div>
    </div>
  );
};

export default SignUp;
