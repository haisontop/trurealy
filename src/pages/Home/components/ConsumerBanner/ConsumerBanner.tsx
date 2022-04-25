import React from "react";
import { GradientDivider } from "../../../../components/GradientDivider";
import { BannerText } from "../BannerText/BannerText";
import styles from "./ConsumerBanner.module.scss";

const ConsumerBanner = () => {
    return (
        <>
            <div className={`container verflow-hidden px-0 position-relative ${styles["Consumer-banner"]}`}>
                <img
                    src="/assets/consumer-banner.png"
                    alt=""
                    className="img-fluid"
                />
                <BannerText
                    title={`FIND YOUR WAY HOME WITH TRU`}
                    description={`Partner with smarter agents and enjoy an unparalleled real estate experience with TRU.`}
                />
            </div>
            <div className="col-12 px-0">
                <GradientDivider size="xs" direction="rtl" />
            </div>
        </>
    );
};

export default ConsumerBanner;
