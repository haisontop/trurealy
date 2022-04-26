import React from "react";
import styles from "./GivingCompanyLogo.module.scss";

function GivingComapanyLogo() {
    return (
        <div className={`my-5 ${styles["giving-logo"]}`}>
            <h2
                className="fw-bold mb-5 text-center"
            >
                AMAZING ORGANIZATIONS WE’VE HELPED
            </h2>
            <div className="row gy-4 px-5">
                <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-center">
                    <img
                        src="/assets/images/orgntn_logo1.png"
                        alt=""
                        className={`img-fluid object-contain ${styles["logo"]}`}
                    />
                </div>
                <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-center">
                    <img
                        src="/assets/images/orgntn_logo2.png"
                        alt=""
                        className={`img-fluid object-contain ${styles["logo"]}`}
                    />
                </div>
                <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-center">
                    <img
                        src="/assets/images/orgntn_logo3.png"
                        alt=""
                        className={`img-fluid object-contain ${styles["logo"]}`}
                    />
                </div>
                <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-center">
                    <img
                        src="/assets/images/orgntn_logo4.png"
                        alt=""
                        className={`img-fluid object-contain ${styles["logo"]}`}
                    />
                </div>
            </div>
        </div>
    );
}

export default GivingComapanyLogo;
