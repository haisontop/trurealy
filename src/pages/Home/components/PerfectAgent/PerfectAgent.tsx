import React from "react";
import style from './PerfectAgent.module.scss';

const PerfectAgent = () => {
  return (
    <div className={`row gx-3 px-md-5 container mx-auto my-5 py-5 ${style["perfect-agent"]}`}>
      <div className="col-md-6">
        <div>
          <div className="my-auto">
            <img
              src="/assets/why-real-estate-12.png"
              className="img-fluid text-end"
              width="90%"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-md-6 text-primary">
        <h2 className="fw-bold mb-5">
        WE LOVE OUR AGENTS & <br /> THEY LOVE YOU BACK.
        </h2>
        <h3 className="fw-bold">
          WHAT MAKES A TRU AGENT THE PERFECT AGENT FOR YOU?
        </h3>
        <ul className="text-primary fs-6 mt-5 fw-bold">
          <li className="mt-4">
            They’re obsessed with innovation, transparency and technology.
         </li>
          <li className="mt-5">They’re local experts who love what they do. They’re  passionate, competent and confident.</li>
          <li className="mt-5">
          They value collaboration over competition, which produces the best results for you.
          </li>
          <li className="mt-5">
          They provide excellent transparency and communication throughout your buying and selling experience.
          </li>
          <li className="mt-5">
          They’re generous with their time, talents, knowledge and insights.
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

export default PerfectAgent;
