import React, { useContext, useRef } from "react";
// import Navber from "../Components/Navber";
// import { valueContext } from "../MainLayout/MainLayout";
import { toast, ToastContainer } from "react-toastify";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router";
// import { AuthContext } from "../Provider/AuthProvider";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase.config";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Components/AuthContext";
// import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { fadeInUp } from "../Components/motionVariants";

const SignIn = () => {
  const { handleSignIn, setUser, setLoading } = useContext(AuthContext);
  // const [errorEmail, setErrorEmail] = useState("");
  // const [errorPass, setErrorPass] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const emailRef = useRef();

  const provider = new GoogleAuthProvider();

  const handleGoogleSignUp = () => {
    console.log("google");

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/");
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const fullName = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const confirmPassword = event.target.confirmPassword.value;

    handleSignIn(email, password)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        setUser(currentUser);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        Swal.fire({
          icon: "error",
          title:
            '<p class="font-bold text-red-600 mulish">Invalid Email OR Password</p>',
        });
        console.log(errorCode, errorMessage);
        // setErrorPass(errorCode);
      });
  };

  const handleForgetPass = () => {
    const email = emailRef.current.value;

    sendPasswordResetEmail(auth, email).then(() => {
      Swal.fire({
        title: '<p class="font-bold mulish">Check Your Email</p>',
      });
    });
  };
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="px-4"
    >
      <Helmet>
        <title>JobTrack | Login</title>
      </Helmet>
      <div class=" p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition duration-500 hover:-translate-y-2 hover:shadow-3xl mx-auto mt-9 mb-18 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-6 mulish">
          Login To Your Account
        </h2>

        {/* <!-- Google Login --> */}
        <form onSubmit={handleSubmit}>
          <button
            onClick={handleGoogleSignUp}
            class=" cursor-pointer w-full flex items-center justify-center gap-3 bg-white border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transform hover:-translate-y-1 transition duration-300"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              class="w-5 h-5"
            />
            <span class="text-sm font-medium mulish text-gray-700 ">
              Continue with Google
            </span>
          </button>
          <div class="my-6 flex items-center">
            <hr class="flex-grow border-gray-300" />
            <span class="px-4 text-gray-500 text-sm">or</span>
            <hr class="flex-grow border-gray-300" />
          </div>
          {/* <!-- Email --> */}
          <div class="mb-4 mulish">
            <label class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-700 font-medium mb-2">
              Email
            </label>
            <input
              ref={emailRef}
              name="email"
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              class=" text-gray-800 placeholder-gray-500 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          {/* {errorEmail ? (
            <p className="text-red-500 text-sm">Invalid Email</p>
          ) : (
            ""
          )} */}
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
              class=" text-gray-800 placeholder-gray-500 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          {/* {errorPass ? <p>Invalid Password </p> : ""} */}
          {/* <!-- Forgot password --> */}
          <div onClick={handleForgetPass} class="text-right mb-4">
            <a href="#" class="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          {/* {error && <p>{error}</p>} */}
          {/* <!-- Submit Button --> */}
          <button class="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transform hover:scale-105 transition duration-300 font-semibold">
            Login
          </button>
          <div className="flex justify-center text-base  mt-3 font-semibold mulish">
            <h1 className="mr-2 text-gray-700">Don't have an account?</h1>
            <NavLink
              className="text-purple-600 hover:scale-110 hover:text-purple-800"
              to={"/signup"}
            >
              Register
            </NavLink>
          </div>
        </form>
        {/* <!-- Divider --> */}
      </div>
      <ToastContainer></ToastContainer>
    </motion.div>
  );
};

export default SignIn;
