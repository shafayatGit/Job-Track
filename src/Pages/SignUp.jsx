import React, { useContext } from "react";
import Navber from "../Components/Navber";
// import { valueContext } from "../MainLayout/MainLayout";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Navigate, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import {
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase.config";
import { FaLaugh } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { handleSignUp, updateUser, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const handleGoogleSignUp = () => {
    // console.log("google");

    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullName = event.target.username.value;
    const photoUrl = event.target.photoUrl.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    handleSignUp(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(auth.currentUser).then(() => {
          updateUser({ displayName: fullName, photoURL: photoUrl }).then(() => {
            if (!user.emailVarified) {
              toast(
                <div className="flex items-center gap-2">
                  <FaLaugh size={25} className="text-green-700"></FaLaugh>
                  <p className="text-black mulish font-base text-[18px]">
                    Please Varify Your Email
                  </p>
                </div>
              );
              setUser({ ...user, displayName: fullName, photoURL: photoUrl });
              navigate("/");
            }
          });
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: '<p class="font-bold">Length must be at least 6 characters!</p>',
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
  };

  return (
    <div className="px-4">
      <Helmet>
        <title>JobTrack | Register</title>
      </Helmet>
      <div class=" p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition duration-500 hover:-translate-y-2 hover:shadow-3xl mx-auto mt-9 mb-18 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-6 mulish">
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>
          {/* <!-- Google Login --> */}
          <button
            onClick={handleGoogleSignUp}
            class="mulish cursor-pointer w-full flex items-center justify-center gap-3 bg-white border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300"
          >
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

          {/* <!-- Photo URL --> */}
          <div class="mb-4 mulish">
            <label class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-700 font-medium mb-2">
              Photo URL
            </label>
            <input
              accept="image/*"
              name="photoUrl"
              id="photoUrl"
              type="file"
              placeholder="https://cdn.example.com/images/photo.jpg"
              class="text-gray-800 placeholder-gray-500 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* /* <!-- Email --> */}
          <div class="mb-4 mulish">
            <label class="block  text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-700 font-medium mb-2">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              class="text-gray-800 placeholder-gray-500 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* <!-- Password --> */}
          <div class="mb-4 mulish">
            <label class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-700 font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              required
              class="text-gray-800 placeholder-gray-500 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-800 transform hover:scale-105 transition duration-300 font-semibold "
          >
            Register
          </button>
          <div className="flex justify-center text-base  mt-3 font-semibold mulish">
            <h1 className="mr-2 text-gray-700">Already have an account?</h1>
            <NavLink
              className="text-purple-600 hover:scale-110 hover:text-purple-800"
              to={"/signin"}
            >
              Login
            </NavLink>
          </div>
        </form>
        {/* <!-- Divider --> */}
      </div>
    </div>
  );
};

export default SignUp;
