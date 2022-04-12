import React from "react";
import { Image } from "react-bootstrap";
import { BannerText } from "./BannerText";

const Banner = () => {
    return (
        <div className="container banner-full-height px-0 width-100 overflow-hidden">
            <div className="row no-gutters h-100">
                <div className="col-6 overflow-hidden px-0 h-100 position-relative banner-col-parents">
                    <Image
                        src="/assets/left-banner.png"
                        className="img-fluid"
                    ></Image>
                    <BannerText
                        title={`FIND YOUR WAY HOME WITH TRU`}
                        description={`Partner with smarter agents and enjoy an unparalleled real estate experience with TRU.`}
                    />
                </div>
                <div className="col-6 overflow-hidden px-0 h-100 position-relative banner-col-parents">
                    <Image
                        src="/assets/right-banner.png"
                        className="img-fluid"
                    ></Image>
                    <BannerText
                        title={`Become a better agent at tru`}
                        description={`Belong to a diverse group of agents scaling their businesses faster than the competition.`}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12 px-0">
                    <div className="gradient-divider" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
