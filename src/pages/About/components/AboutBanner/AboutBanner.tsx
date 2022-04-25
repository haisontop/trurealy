import React from "react";
import style from "./AboutBanner.module.scss";

const AboutBanner = () => {
    return (
        <div className="position-relative">
            <div>
                <img
                    src="/assets/images/Mask Group 36.png"
                    className={`img-fluid m-xl-5 ${style["image"]}`}
                    alt=""
                />
            </div>
            <div className={`${style["about-Consumer-banner-Box"]}`}>
                <div className="position-relative">
                    <img
                        src="/assets/Group 130.png"
                        className="img-fluid"
                        alt=""
                    />
                    <h1 className="position-absolute top-0 text-white fw-bold">
                        INNOVATIVE, TECHNOLOGY DRIVEN, <br /> AGENT-CENTRIC.
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;
