import React from "react";
import style from "./PrelincenseBanner.module.scss";

function PrelicenseBanner() {
    return (
        <div className="container-fluid mx-auto">
            <div
                className={`text-white text-center mx-auto ${style["p-gradiant-banner"]}`}
            >
                <h2 className={`m-0 p-0 fw-bold display-1`}>
                    FOREVER CHANGE YOUR
                </h2>
                <h1 className={`m-0 p-0 fw-bold ${style["title-top"]}`}>
                    TOMORROW, TODAY
                </h1>
            </div>
            <div
                className={`bg-primary text-white text-center ${style["p-b-chield"]}`}
            >
                <img
                    src="/assets/whats-in-it-for-you-thumbnail.png"
                    className="img-fluid "
                    width="88%"
                    alt=""
                    style={{ marginTop: "-40px" }}
                />
                <p>
                    Enroll in our Pre-License Real Estate education classes and
                    Post-License Training & make up to $30,000 in you first
                    three transactions.
                </p>
                <span className="fw-bold">
                    Close your first deal in as little as sixty days.
                </span>
            </div>
        </div>
    );
}

export default PrelicenseBanner;
