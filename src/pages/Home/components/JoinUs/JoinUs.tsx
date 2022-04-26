import React from "react";
import { Button, Image } from "react-bootstrap";
import styles from "./JoinUs.module.scss";
import { SocialCarousel } from "./SocialCarousel";

export const JoinUs = () => {
    return (
        <div
            className={`d-flex flex-column w-100 ${styles["join-us-container"]}`}
        >
            <div className={`${styles["join-us-top-header"]}`}>
                <div
                    className={`${styles["join-us-top-header-content"]} bg-primary`}
                >
                    <div className="text-white">
                        <h1 className="fw-bold">
                            BE A PARTS OF THE GREATEST REAL ESTATE STORY EVER
                            TOLD. YOURS.
                        </h1>
                    </div>
                    <div className="text-white fs-3 mt-2 mt-xxl-5">
                        Join us as we reimagine real estate through training,
                        transparency, innovation and inclusivity for consumers
                        and agents alike.
                    </div>
                </div>
            </div>
            <div className={`container px-2 px-xxl-4`}>
                <div className="row gx-2 gx-xxl-4">
                    <div className="col-12 col-md-12 col-lg-3 col-xxl-4">
                        <SocialCarousel />
                    </div>
                    <div className="col-12 col-md-12 col-lg-9 col-xxl-8">
                        <div
                            style={{
                                background: "rgba(60, 69, 240, 0.25)",
                                padding: "3.5rem",
                                borderRadius: "25px",
                            }}
                        >
                            <div className="text-white fs-1 xxl:fs-2">
                                In 2018, TRU Realty was the first brokerage in
                                the United States to execute an investor cash
                                transaction on the Blockchain using the Ethereum
                                protocol.
                            </div>
                            <Button className="mt-4 py-2 fs-4 btn-pink px-5">
                                LEARN MORE ABOUT TRU
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles["join-us-bottom-header"]}`}>
                <div
                    className={`${styles["join-us-bottom-header-content"]} bg-primary`}
                >
                    <h1 className="fw-bold text-white">
                        TRANSPARENT. ACCOUNTABLE. TRU.
                    </h1>
                    <p className="text-white fs-2 mt-5 fw-medium">
                        TRU Realty’s Transformational Technology, Training And
                        Transparency Creates Smarter Agents And Unparalleled
                        Real Estate Experiences.
                    </p>
                </div>
            </div>
        </div>
    );
};
