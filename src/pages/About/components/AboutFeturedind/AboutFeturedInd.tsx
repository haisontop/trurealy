import React from "react";
import { Container } from "react-bootstrap";
import { FeaturedIn } from "../../../../components/FeaturedIn";
import styles from "./AboutFeturedind.module.scss";
const AboutFeturedind = () => {
    return (
        <div
            className={`text-white px-md-4 position-relative ${styles["AboutFeturedin"]}`}
        >
            <FeaturedIn />
            <div
                className={`row gx-5 container mx-auto ${styles["Feturedin-row"]}`}
            >
                <div className="col-5">
                    <img
                        src="/assets/images/DSC00261.png"
                        className="img-fluid"
                        alt=""
                    />
                </div>
                <div className="col-7 px-5">
                    <h2 className="fw-bold">EXPERIENCE MATTERS.</h2>
                    <p className="mt-5">
                        At TRU Realty, we approach every real estate transaction
                        with unmatched insight, intelligence, and care. Our real
                        estate agents are setting the standard for knowledge and
                        customer service in the current market.
                    </p>
                    <p className="mt-5">
                        When you work with a TRU Realty agent, you get a skilled
                        advisor and the confidence that comes from having an
                        outstanding real estate team on your side during the
                        process of buying or selling your home. We measure our
                        success by the satisfaction of our clients and the
                        difference our agents make in their communities each and
                        every day.
                    </p>
                </div>
            </div>
            <div className={`${styles["lineir-bg"]}`} />
        </div>
    );
};

export default AboutFeturedind;
