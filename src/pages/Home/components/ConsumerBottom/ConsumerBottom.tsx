import React from "react";
import { Container } from "react-bootstrap";
import styles from './ConsumerBottom.module.scss';

const ConsumerBottom = () => {
  return (
    <div className={`${styles["consumer-bottom"]} py-5`}>
      <Container className="mx-auto text-white">
        <h1 className="text-center fw-bold">
          BUY OR SELL YOUR HOME FASTER <br /> AND SAFER WITH TRU
        </h1>
        <div className="row mt-5 g-4 px-5">
          <div className="col-6">
            <p>
              Digital Closing Technology is now at your fingertips with TRU
              Realty. Enjoy a modern real estate closing experience like no
              other through our unique partnership with endpoint.
            </p>
          </div>
          <div className="col-6">
            <img
              src="/assets/endpoint-logo-white.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button
            className="bg-white px-5 text-default fs-6 fw-bold le py-2 border-0 mt-3"
            style={{ borderRadius: "10px" }}
          >
            Learn more about TRU’s Tech
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ConsumerBottom;
