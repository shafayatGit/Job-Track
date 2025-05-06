import React from "react";
import { Link } from "react-router";
import Cards from "./Cards";

const CardContainer = ({ data }) => {
  //   console.log(data);
  return (
    <div id="cards_container" className="mulish mt-32 mb-32">
      <div className="text-center">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          All Available Companies
        </h2>
        <p class="text-gray-600 mb-8">
          Discover top-rated companies hiring now. Learn more about their
          culture, open roles, and what makes them great places to work.
        </p>
        <div className="lg:p-0 mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded mt-10 mb-10">
          {data.map((cardData) => (
            <Cards key={cardData.id} cardData={cardData}></Cards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
