import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Carousel = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("carouselData.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  {
    reviews.map((data) => {
      <div className="carousel-item">
        <div>
          <div className="flex text-amber-600">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </div>
          <h1>{data.title}</h1>
          <h1>{data.description}</h1>
          <div>
            <img src="" alt="" />
            <div>
              <h1>name</h1>
              <h1>Happy Client</h1>
            </div>
          </div>
        </div>
      </div>;
    });
  }
  return (
    <div>
      <div className="carousel rounded-box">
        {reviews.map((data) => {
          <div className="">
            <img src={data.image} alt="Burger" />
          </div>;
        })}
        {/* <div className="carousel-item">
          <img src="https://i.ibb.co.com/YBQWfdCX/unnamed.jpg" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            alt="Burger"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
