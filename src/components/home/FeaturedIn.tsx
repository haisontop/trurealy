import React from "react";
import { Image } from "react-bootstrap";

const FeaturedIn = () => {
  return (
    <div className="d-flex flex-column px-4 py-5 w-100">
      <div
        style={{
          width: "100%",
          height: "27px",
          borderBottom: "5px solid #292670",
          textAlign: "center",
        }}
        className="mb-4"
      >
        <span
          style={{
            fontSize: "35px",
            backgroundColor: "#fff",
            padding: "0 20px",
            color: "#292670",
          }}
        >
          Featured In
        </span>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-4 col-lg-3 col-xxl-2">
            <Image
              src="/assets/inc-5000-logo.png"
              width="196px"
              height="105px"
              className="img-fluid"
            />
          </div>
          <div className="col-4 col-xxl-2">
            <Image
              src="/assets/inman-logo.png"
              width="196px"
              height="105px"
              className="img-fluid"
            />
          </div>
          <div className="col-4 col-xxl-2">
            <Image
              src="/assets/business-journal-logo.png"
              width="196px"
              height="105px"
              className="img-fluid"
            />
          </div>
          <div className="col-4 col-xxl-2">
            <Image
              src="/assets/naor-logo.png"
              width="196px"
              height="105px"
              className="img-fluid"
            />
          </div>

          <div className="col-4 col-xxl-2">
            <Image
              src="/assets/chime-logo.png"
              width="196px"
              height="105px"
              className="img-fluid"
            />
          </div>

          <div className="col-4 col-xxl-2">
            <Image
              src="/assets/rismedia-logo.png"
              width="196px"
              height="105px"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
