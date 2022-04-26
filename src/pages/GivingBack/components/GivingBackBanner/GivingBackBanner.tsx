import React from "react";
import { GradientDivider } from "../../../../components/GradientDivider";
import { BsSuitHeart } from "react-icons/bs";
import styles from "./GivingBackBanner.module.scss";

function GivingBackcoBanner() {
    return (
        <>
            <div className={`position-relative ${styles["GivingBackBanner"]}`}>
                <img src="/assets/bg/giving-bg.png" alt="" loading="lazy" />
                <div
                    className={`position-absolute top-0 start-0 py-3 px-5 d-flex gap-2 align-items-center fw-bolder text-white ${styles["true-cares"]}`}
                >
                    #TRUCARES
                    <BsSuitHeart className="ms-3" />
                </div>
                <div
                    className={`position-absolute bottom-0 end-0 bg-black bg-opacity-75 px-5 py-3 text-white ${styles["difference-text"]}`}
                >
                    <h1 className="fw-bold">
                        TRU AGENTS ARE MAKING A DIFFERENCE
                    </h1>
                    <p>
                        Our culture is defined by our values. At the core of
                        those values is generosity. We believe in developing
                        relationships with organizations and causes that
                        positively impact their communities. Giving back is what
                        we do, it’s who we are as an organization.
                    </p>
                </div>
            </div>
            <div
                className="w-100 py-3 mb-5"
                style={{
                    backgroundImage:
                        "linear-gradient(270deg, #3B46F2 0%, #FD084F 100%)",
                }}
            />
        </>
    );
}

export default GivingBackcoBanner;
