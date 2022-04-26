import React from "react";
import { Button, Image } from "react-bootstrap";
import styles from "./AgentOurCulture.module.scss";

export const AgentOurCulture = () => {
    return (
        <div
            className={`d-flex flex-column w-100 ${styles["join-us-container"]}`}
        >
            <div className={`${styles["join-us-top-header"]}`}>
                <div
                    className={`${styles["join-us-top-header-content"]} bg-light`}
                >
                    <div className="text-primary display-1 fw-bold text-uppercase">
                        Our Culture
                    </div>
                    <div className="text-primary fs-2 fw-bold lh-2">
                        “Sarah Richardson, Founder & CEO of TRU, has created an
                        environment of collaboration and energy that is
                        incredible and contagious” -Tammy Peil, TRU Agent
                    </div>
                </div>
            </div>
            <div
                className={`container px-2 px-xxl-4 ${styles["row-container"]}`}
            >
                <div className="row container mx-auto px-md-5 gx-md-5">
                    <div className="col-md-5">
                        <img
                            src="/assets/culture-bg.png"
                            className="img-fluid"
                            alt=""
                        />
                        <button
                            className="bg-pink px-5 w-100 text-white fs-4 fw-bold le py-2 border-0 mt-5"
                            style={{ borderRadius: "10px" }}
                        >
                            Join TRU Realty
                        </button>
                    </div>
                    <div className="col-md-7 text-white d-flex aling-item-center">
                        <div className="mt-5 mt-md-0">
                            <p className="fw-medium">
                                At TRU Realty we believe that having fun, loving
                                what you do and who you’re doing it with are
                                essential to delivering the unparalleled real
                                estate experiences TRU agents provide each and
                                every day.
                            </p>
                            <p className="fw-medium my-4">
                                We don’t take ourselves too seriously, just the
                                amazing service we provide our communities! We
                                love our social events, hosted by our awesome
                                brand ambassadors, such as First Friday’s, Book
                                of the Month, Wine Down Wednesday’s and Awards
                                Night.
                            </p>
                            <p className="fw-medium">
                                We love listening, designing, teaching, cooking,
                                helping, creating, leading, writing, singing,
                                learning, but most of all, we love collaborating
                                to make your dreams come true.
                            </p>
                            <h4 className="fw-bold">
                                WE ARE INCLUSIVE INNOVATIVE, DIVERES AND
                                DETERMINED TO SUCCEED.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
