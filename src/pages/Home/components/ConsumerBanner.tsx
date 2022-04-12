import React from "react";
import { BannerText } from "./BannerText";

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
                <div className="gradient-divider-3" />
            </div>
        </>
    );
};

export default ConsumerBanner;
