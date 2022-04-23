import React from "react";
import { Image } from "react-bootstrap";
import { BannerText } from "../BannerText/BannerText";
import styles from "./AgentBottomBanner.module.scss";

export const AgentBottomBanner = () => {
    return (
        <div
            className={`container px-0 width-100 overflow-hidden ${styles["banner-full-height"]}`}
        >
            <div className="row no-gutters">
                <div
                    className={`col-6 overflow-hidden px-0 position-relative banner-col-parents ${styles["banner-left"]}`}
                >
                    <Image
                        src="/assets/agent-bottom-left.png"
                        className="img-fluid"
                    ></Image>
                    <div className={`text-white ${styles["banner-text"]}`}>
                        <h1 className="fw-bold">LICENSED</h1>
                        <p className="mt-3 fw-medium">
                            Do you have a real estate license? Are you looking
                            for a brokerage? Apply here.
                        </p>
                    </div>
                </div>
                <div
                    className={`col-6 overflow-hidden px-0 position-relative banner-col-parents ${styles["banner-right"]}`}
                >
                    <Image
                        src="/assets/agent-bottom-right.png"
                        className="img-fluid"
                    ></Image>
                    <div
                        className={`fs-1 text-white font-weight-bold ${styles["banner-text"]}`}
                    >
                        <h1 className="fw-bold">PRE-LICENSED</h1>
                        <p className="mt-3 fw-medium">
                            Don’t have real estate license? Looking to begin
                            your career in real estate? Apply here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
