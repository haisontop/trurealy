import React from "react";
import { Button, Image } from "react-bootstrap";
import TextBanner from "../../../../components/TextBanner";
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
                    <div className="text-white fs-2">
                        Be a part of the greatest real estate story ever told.
                        Yours.
                    </div>
                    <div className="text-white fs-5 mt-2 mt-xxl-5">
                        Join us as we reimagine real estate through training,
                        transparency, innovation and inclusivity for consumers
                        and agents alike.
                    </div>
                </div>
            </div>
            <div className="container px-2 px-xxl-4">
                <div className="row gx-2 gx-xxl-4">
                    <div className="col-12 col-md-12 col-lg-3 col-xxl-4">
                        <SocialCarousel />
                    </div>
                    <div className="col-12 col-md-12 col-lg-9 col-xxl-8">
                        <div
                            style={{
                                background: "rgba(60, 69, 240, 0.25)",
                                padding: "60px 60px",
                                borderRadius: "25px",
                            }}
                        >
                            <div className="text-white fs-4 xxl:fs-2">
                                In 2018, TRU Realty was the first brokerage in
                                the United States to execute an investor cash
                                transaction on the Blockchain using the Ethereum
                                protocol.
                            </div>
                            <Button className="mt-2 btn-pink px-5">
                                LEARN MORE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <TextBanner />
        </div>
    );
};
