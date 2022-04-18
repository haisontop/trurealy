import React from "react";
import { Image } from "react-bootstrap";
import { BannerText } from "../BannerText";
import styles from "./AgentBottomBanner.module.scss";

export const AgentBottomBanner = () => {
    return (
        <div
            className={`container px-0 width-100 overflow-hidden ${styles["banner-full-height"]}`}
        >
            <div className="row no-gutters">
                <div className={`col-6 overflow-hidden px-0 position-relative banner-col-parents ${styles["banner-left"]}`}>
                    <Image
                        src="/assets/agent-bottom-left.png"
                        className="img-fluid"
                    ></Image>
                    <div
                        className={`fs-1 text-white font-weight-bold ${styles["banner-text"]}`}
                    >
                        LICENSED
                    </div>
                </div>
                <div className={`col-6 overflow-hidden px-0 position-relative banner-col-parents ${styles["banner-right"]}`}>
                    <Image
                        src="/assets/agent-bottom-right.png"
                        className="img-fluid"
                    ></Image>
                    <div
                        className={`fs-1 text-white font-weight-bold ${styles["banner-text"]}`}
                    >
                        PRE-LICENSED
                    </div>
                </div>
            </div>
        </div>
    );
};
