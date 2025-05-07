import React, { useContext } from "react";
// import Navber from "../Components/Navber";
// import { valueContext } from "../MainLayout/MainLayout";
import { ToastContainer } from "react-toastify";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
// import Swal from "sweetalert2";

const SignIn = () => {
  const { handleSignIn, setUser, user } = useContext(AuthContext);
  // const [errorEmail, setErrorEmail] = useState("");
  // const [errorPass, setErrorPass] = useState("");
  const location = useLocation();

  const navigate = useNavigate();
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
        console.log(errorCode, errorMessage);
        // setErrorPass(errorCode);
      });

    if (user) {
      if (user.email != email || user.password != password) {
        return alert("Invalid");
      }
    }

    // if (user) return navigate("/");
    // toast(
    //   <div className="flex items-center gap-2">
    //     <IoIosCheckmarkCircle
    //       size={25}
    //       className="text-green-700"
    //     ></IoIosCheckmarkCircle>
    //     <p className="text-black mulish font-base text-[18px]">
    //       Logged In Successfully!
    //     </p>
    //   </div>
    // );
  };
  return (
    <div>
      <div class=" p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition duration-500 hover:-translate-y-2 hover:shadow-3xl mx-auto mt-9 mb-18 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">
          Login To Your Account
        </h2>

        {/* <!-- Google Login --> */}
        <form onSubmit={handleSubmit}>
          {" "}
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
          {/* <!-- Email --> */}
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="you@example.com"
              class="placeholder-gray-500 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          {/* {errorEmail ? (
            <p className="text-red-500 text-sm">Invalid Email</p>
          ) : (
            ""
          )} */}
          {/* <!-- Password --> */}
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              class="placeholder-gray-500 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          {/* {errorPass ? <p>Invalid Password </p> : ""} */}
          {/* <!-- Forgot password --> */}
          <div class="text-right mb-4">
            <a href="#" class="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          {/* {error && <p>{error}</p>} */}
          {/* <!-- Submit Button --> */}
          <button class="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transform hover:scale-105 transition duration-300 font-semibold">
            Login
          </button>
          <div className="flex justify-center text-base  mt-3 font-semibold">
            <h1 className="mr-2 ">Don't have an account?</h1>
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
    </div>
  );
};

export default SignIn;
