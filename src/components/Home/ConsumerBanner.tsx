import React from "react";
import BannerLeftText from "../shared/BannerLeftText";

const ConsumerBanner = () => {
  return (
    <>
      <div className="container verflow-hidden px-0 position-relative">
        <img src="/assets/consumer-banner.png" alt="" className="img-fluid" />
        <BannerLeftText />
      </div>
      <div className="col-12 px-0">
        <div className="gradient-divider-3" />
      </div>
    </>
  );
};

export default ConsumerBanner;
