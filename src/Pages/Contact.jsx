import React, { useState } from "react";
import Navber from "../Components/Navber";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with an API call
    console.log("Form submitted:", formData);
    toast("Thank you for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="mulish max-w-6xl mx-auto">
      <Navber></Navber>
      <h2
        className="text-4xl font-medium text-black mt-10"
        style={{ textAlign: "center", marginBottom: "1rem" }}
      >
        Contact Us
      </h2>
      <p
        className="text-sm font-base text-gray-500"
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        Have questions or need help? Whether you're a job seeker or an employer,
        we're here for you.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label className="text-xl font-medium text-black">Name</label>
          <br />
          <input
            className="border border-gray-300 rounded-lg"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label className="text-xl font-medium text-black">Email</label>
          <br />
          <input
            className="border border-gray-300 rounded-lg"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label className="text-xl font-medium text-black">Message</label>
          <br />
          <textarea
            className="border border-gray-300 rounded-lg"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-linear-65 from-blue-400 to-pink-300 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white font-medium transition-all duration-300 transform group-hover:translate-x-full ease bg-linear-65 from-blue-700 to-pink-600">
            Send
          </span>
          <span className="relative invisible">Send</span>
        </button>
      </form>
      <div className="text-base font-medium text-black text-center flex flex-col gap-3 mt-16">
        <p className="text-[18px]">Email: support@jobtracksite.com</p>
        <p className="text-gray-600 ">Phone: +1 800 123 4567</p>
        <p>
          Follow us on{" "}
          <div className="flex justify-center gap-2 mt-3 mb-18">
            <a href="#">
              <FaLinkedin size={25}></FaLinkedin>
            </a>{" "}
            |{" "}
            <a href="#">
              <FaTwitter size={25}></FaTwitter>
            </a>
          </div>
        </p>
      </div>
      <ToastContainer></ToastContainer>
    </section>
  );
}

export default ContactUs;
