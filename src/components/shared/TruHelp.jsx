import React from "react";

const Truhelp = () => {
  return (
    <div className="bg-primary text-center py-5 text-white mt-5">
      <h1 className="fw-normal fs-2 sm-fs-4">
        TRU Agents Here To Help
      </h1>
      <div className="d-flex justify-content-center mt-5">
        <button className="py-1 text-white px-5 fs-4 me-4 tru-help-btn">
          Find An Agent
        </button>
        <button className="py-1 text-white px-4 fs-4 tru-help-btn">
          Find a New Home
        </button>
      </div>
    </div>
  );
};

export default Truhelp;
