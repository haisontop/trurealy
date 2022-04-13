import React from "react";

const ParfectAgent = () => {
  return (
    <div className="row g-5 container mx-auto my-5 py-5">
      <div className="col-6">
        <div>
          <div>
            <img
              src="/assets/why-real-estate-12.png"
              className="img-fluid text-end"
              width="90%"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-6 text-primary">
        <h2 className="fw-bold mb-5">
          We love our agents & <br /> they love YOU back.
        </h2>
        <h2 className="fw-bolder fs-4">
          WHAT MAKES A TRU AGENT THE PERFECT AGENT FOR YOU?
        </h2>
        <ul className="text-primary fs-6 mt-5 fw-light">
          <li className="mt-3">
            They are provided with innovated <br /> technology to give you the
            best.
          </li>
          <li className="mt-3">They love what they do, it’s their passion.</li>
          <li className="mt-3">
            They value collaboration over <br /> competition.
          </li>
          <li className="mt-3">
            They provide excellent transaprecny <br /> throughout your
            experience.
          </li>
          <li className="mt-3">
            They are generous with their time, talents, <br /> and knowledge.
          </li>
        </ul>
        <button
          className="bg-pink px-4 fs-5 le py-2 border-0 text-white mt-4"
          style={{ borderRadius: "10px" }}
        >
          MATCH ME WITH AN AGENT
        </button>
      </div>
    </div>
  );
};

export default ParfectAgent;
