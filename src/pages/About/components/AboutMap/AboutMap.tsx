import React from "react";
import styles from "./AboutMap.module.scss";

const AboutMap = () => {
    return (
        <div
            className={`container position-relative mx-auto px-md-5 ${styles["About-map"]}`}
        >
            <div>
                <h3 className="text-primary fw-bold">
                    LOOK WHERE WE’VE GROWN & STILL GROWING STRONG
                </h3>
            </div>
            <div className={`row gx-5 mt-4`}>
                <div className={`col-6`}>
                    <div>
                        <img
                            src="/assets/images/3.0 map as of 419.png"
                            className="img-fluid"
                            width="97%"
                            alt=""
                        />
                    </div>
                </div>
                <div className={`col-6`}>
                    <div className={`bg-primary position-absolute text-white ${styles["style-box"]}`}>
                        <p>
                            Growing with intention has allowed TRU Realty the
                            opportunity to improve the buying and selling
                            experience for all of our clients, agents and
                            everyone in between. TRU’s focus on education and
                            innovation has prompted a nationwide mandate for
                            expansion allowing us to better serve consumers
                            across the country.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMap;
