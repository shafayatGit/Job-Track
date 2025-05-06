import React from "react";
import { FaStar } from "react-icons/fa";

//

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Ahmed",
      role: "Frontend Developer",
      text: "This platform helped me land my first job! The category-based job search is super intuitive.",
      image:
        "https://i.ibb.co.com/1t9WsJnc/9731022f0be7c965e880505461643850.jpg",
    },
    {
      name: "Mohammad Reza",
      role: "UI/UX Designer",
      text: "A great place for job seekers! Clean interface and helpful features like modals and apply links.",
      image: "https://i.ibb.co.com/pr2ZHH8y/unnamed.jpg",
    },
    {
      name: "Riya Talukdar",
      role: "Marketing Specialist",
      text: "I love how easy it is to browse jobs by category. The modal apply feature is smooth and convenient.",
      image:
        "https://i.ibb.co.com/Hf7jDVDr/best-Linkedin-social-profile-photo-executive-photos-nyc.jpg",
    },
    {
      name: "Junaid Khan",
      role: "Backend Engineer",
      text: "Everything is well-structured. Loved the hover animations and the quick apply features!",
      image: "https://i.ibb.co.com/842FTQnX/unnamed-1.jpg",
    },
    {
      name: "Nadia Sultana",
      role: "HR Manager",
      text: "An amazing platform for both recruiters and job seekers. It saved me tons of time.",
      image: "https://i.ibb.co.com/TBbg6V57/unnamed-2.jpg",
    },
    {
      name: "Zahid Islam",
      role: "Project Manager",
      text: "Excellent UI and very responsive. The job filtering system is top-notch!",
      image: "https://i.ibb.co.com/DPxKJZSM/unnamed-3.jpg",
    },
  ];

  return (
    <div>
      <section className="py-16 px-4 mb-28">
        <h2 className="text-4xl font-bold text-center  mb-10">
          What Our Users Say
        </h2>

        <div className="overflow-x-auto scrollbar-hide ">
          <div className="flex gap-6 px-4 min-w-full w-max">
            {reviews.map((review, index) => (
              <div
                key={index}
                className=" w-80 flex-shrink-0 p-6 rounded-2xl shadow-md transform transition-all duration-500 hover:rotate-2 hover:-translate-y-3 hover:shadow-xl hover:scale-105 hover:bg-pink-100 hover:text-black"
              >
                <p className="mb-4">“{review.text}”</p>
                <div className="flex items-center gap-3">
                  <img
                    className="w-16 h-16 rounded-full"
                    src={review.image}
                    alt=""
                  />
                  <div className="mt-4">
                    <div className="flex gap-1 text-amber-600">
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                    </div>
                    <h4 className="font-semibold ">{review.name}</h4>
                    <p className="text-sm ">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
