import React from "react";
import { trustory } from "../../../constants/TRUSTORY-MOCK_DATA";

const Trastory = () => {
  return (
    <div className="container row mx-auto px-3 position-relative py-5">
      <div className="col-6 text-primary">
        <div>
          <h3 className="fw-bold">
            We love our clients <br /> & they love us back.
          </h3>
          <h1 className="my-5 fw-bold" style={{ fontSize: "60px" }}>
            #TRUSTORY <sup>❤</sup>
          </h1>
        </div>
        <div>
          <h3 className="mb-4 fw-bolder">WHY CHOOSE TRU?</h3>
          <p className="fw-bold">
            Tru Realty is a leader in industry education and is an advocate for
            reshaping and protecting the consumer experience for the real estate
            industry as a whole. The goal has always been to provide outstanding
            client service and support the communities we serve. Tru Realty has
            accomplished that and much more for over a decade!
          </p>
          <button
            className="bg-pink px-4 fs-5 le py-1 border-0 text-white mt-3"
            style={{ borderRadius: "10px" }}
          >
            FIND AN AGENT
          </button>
        </div>
      </div>
      <div className="col-6">
        <div className="trastory-box">
          <div className="bg-primary text-white trastory-child">
            {trustory.map((ts) => (
              <div className="row gx-0 mt-4">
                <div className="col-3 d-flex justify-content-centre aling-item-centre">
                  <img
                    src={ts.img}
                    className="img-fluid m-auto"
                    width="70px"
                    alt=""
                  />
                </div>
                <div className="col-9">
                  <p className="my-0">{ts.massage}</p>
                  <p className="my-0 fw-bold">{ts.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trastory;
