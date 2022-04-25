import React from "react";
import styles from "./AboutDefference.module.scss";
import { about_mock_data } from "../../../../constants/ABOUT_DEFFERENCE_MOCK_DATA";

const AboutDefference = () => {
    const service = [
        "Innovative",
        "Helpful",
        "Tech Savvy",
        "Customer Centric",
        "Driverse",
        "Passionate",
        "Accountable",
        "Long Term",
    ];
    return (
        <div className={`position-relative ${styles["ab-co-differrence"]}`}>
            <div className="container px-xl-5 mx-auto">
                <h1 className="fw-bold text-primary">LED BY VALUES</h1>
                <span className="fw-medium mt-5 mt-md-0 text-primary">
                    Defining our values is our way of sharing with you exactly
                    who we are as professionals, <br /> as well as individuals,
                    in our communities. Take a look at the attributes that make
                    TRU <br /> one of the fastest growing real estate brokerages
                    in the country.{" "}
                </span>
            </div>
            <div
                className={` bg-primary ${styles["about-defference-box"]} mt-5`}
            >
                <div
                    className={`${styles["about-defference-child-box"]} text-white`}
                >
                    <div className="row row-cols-1 row-cols-xl-5 gy-4 gy-md-0 gx-xl-4">
                        {about_mock_data.map((sr) => (
                            <div className="text-center text-primary col">
                                <div
                                    className={`bg-white py-4 ${styles["card"]}`}
                                >
                                    <img
                                        src={sr.img}
                                        className="img-fluid"
                                        width="70%"
                                        alt=""
                                    />
                                    <p className="mt-5">{sr.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutDefference;
