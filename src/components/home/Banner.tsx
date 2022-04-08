import React from "react";
import { Image } from "react-bootstrap";
import BannerLeftText from "../shared/BannerLeftText";
import BannerRightText from "../shared/BannerRightText";

const Banner = () => {
  return (
    <div className="container banner-full-height px-0">
      <div className="row no-gutters h-100">
        <div className="col-6 overflow-hidden px-0 h-100 position-relative banner-col-parents">
          <Image src="/assets/left-banner.png" className="img-fluid"></Image>
          <BannerLeftText />
        </div>
        <div className="col-6 overflow-hidden px-0 h-100 position-relative banner-col-parents">
          <Image src="/assets/right-banner.png" className="img-fluid"></Image>
          <BannerRightText />
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
