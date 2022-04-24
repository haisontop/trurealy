import React from "react";
import { Button, Image } from "react-bootstrap";
import styles from "./AgentWelcome.module.scss";

export const AgentWelcome = () => {
    return (
        <div className="position-relative">
        <div
            className={`d-flex flex-column w-100 ${styles["join-us-container"]}`}
        >
            <div className={`${styles["join-us-top-header"]}`}>
                <div
                    className={`${styles["join-us-top-header-content"]} bg-light`}
                >
                    <h2 className="text-primary fw-bold lh-1 text-uppercase">
                        Technology, training & transparency that reshapes how
                        you build your business
                    </h2>
                    <p className="text-primary mt-2">
                        Increase your revenue streams at TRU Realty through our
                        amazing revenue sharing programs, agent equity offerings
                        and agent influencer opportunities. Together, we’ll help
                        you become a smarter agent, launch a better business and
                        build relationships that will last a lifetime.
                    </p>
                </div>
            </div>
            <div className="container px-2 px-xxl-4">
                <div className="row gx-2 gx-xxl-4 justify-content-md-center">
                    <div className={`col-12 col-md-12 col-lg-10 col-xxl-10 text-center ${styles["welcome-middle"]}`}>
                        <div className="display-1 fw-normal text-white">WELCOME HOME</div>
                        <p className="fw-normal text-white mt-2">
                            At TRU Realty, our mission is to create a diverse
                            and inclusive culture focused on training and
                            education, coupled with innovative technology, in
                            order to provide an unparalleled level of service to
                            our agents and the communities we serve.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container px-0 pt-5">
                <div
                    className={`${styles["join-us-bottom-header"]} row g-0 py-4 pe-5`}
                >
                    <div className="col-12 col-md-12 col-lg-10 col-xxl-8 text-left pr-5">
                        <div className="position-relative w-100">
                            <div
                                className={`${styles["join-us-bottom-header-content"]} bg-white text-primary pb-3`}
                            >
                                <div
                                    className={`${styles["join-us-bottom-header-content-title"]} fw-bold`}
                                >
                                <h1 className="fw-bold">
                                    1/3 of TRU Agents
                                </h1>
                                <p className="fw-bold lh-1 mt-3">
                                    close their first deal in 60 to 90 days and
                                    our agent success rate is 2.5X higher than
                                    the industry average.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-10 col-xxl-4 text-left">
                        <div className={`ps-5 pt-2`}>
                            <div className="fs-1 fw-bold text-white">
                                BROKER SUPPORT?
                            </div>
                            <div className="fs-1 mt-2 text-white lh-5 text-uppercase">
                                TRU leads the industry in broker response time
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
