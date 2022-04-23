import React from "react";
import style from "./AboutBottom.module.scss"

const AboutBottom = () => {
  return (
    <div className="bg-primary text-center py-5 mt-5">
      <div className={`container mx-auto text-white ${style['about-bottom']}`}>
        <h1>
          Find a dream home with TRU, or join <br /> over 100 TRU agents.
        </h1>
        <div>
          <button
            className="bg-pink px-5 text-white fs-4 fw-normal le py-2 me-2 border-0 mt-3"
          >
            Join The Tru Team
          </button>
          <button
            className="bg-pink px-5 text-white fs-4 fw-normal le py-2 border-0 mt-3"
          >
            Become An Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutBottom;
