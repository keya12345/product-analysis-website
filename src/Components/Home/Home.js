import React, { useContext } from "react";

import "./Home.css";

const Home = ({ dress }) => {
  console.log(dress);
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="text-6xl font-semibold text-purple-800 mt-8 mb-8">
            MY FASHION HOUSE
          </h1>
          <p className="text-2xl font-semibold mx-3">
            It is also defined as a fashionable clothes company: a business that
            designs, makes, and sells fashionable clothes that are typically
            associated with an important designer, or a company that designs
            news styles of expensive clothes.
          </p>
          <button className="rounded-full bg-teal-400 mx-4 h-8 w-16  my-4 ">
            DEMO
          </button>
        </div>

        <div className="image">
          <img src="download.jpg" alt="" />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-center mt-10">
          Coustomer Reviwes(3)
        </h1>

        <button className="rounded-full bg-teal-400 mx-4 p-3">
          See all reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
