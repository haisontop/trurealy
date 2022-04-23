import React from "react";
import { GradientDivider } from "../../../components/GradientDivider";
import { BannerText } from "./BannerText/BannerText";

const ConsumerBanner = () => {
    return (
        <>
            <div className="container verflow-hidden px-0 position-relative">
                <img
                    src="/assets/consumer-banner.png"
                    alt=""
                    className="img-fluid"
                />
                <BannerText
                    title={`ENJOY An UNPARALLELED buying & selling EXPERIence`}
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
