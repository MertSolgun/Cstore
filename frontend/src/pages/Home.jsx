import React from "react";
import { stats } from "../helper/data";
import Testimonial from "../components/Testimonial";
import "pure-react-carousel/dist/react-carousel.es.css";

const Home = () => {
  return (
    <div>
      <div className="container max-w-7xl mx-auto">
        <h1 className="text-center text-4xl mt-5 font-montserrat">
          We do our best to make customers always happy
        </h1>
        <p className="text-center mt-5 text-xl font-bold font-montserrat">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, et.
        </p>
        <div className="grid grid-cols-2 mt-10 mx-auto justify-between items-center ">
          {stats.map((item, index) => {
            return (
              <div className="flex  justify-between mx-auto" key={index}>
                <div className="flex flex-col">
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-yellow-400 font-bold font-montserrat text-4xl ">
                      {item.data}
                    </span>
                    <span className="text-gray-500 mb-5">{item.title}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Testimonial />
    </div>
  );
};

export default Home;
