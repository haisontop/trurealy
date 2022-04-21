import React from "react";
import { GradientDivider } from "../../../components/GradientDivider";
import { BannerText } from "./BannerText";

const AgentBanner = () => {
    return (
        <>
            <div className="container verflow-hidden px-0 position-relative">
                <img
                    src="/assets/agent1.png"
                    alt=""
                    className="img-fluid"
                />
                <BannerText
                    title={`BECOME A SMARTER AGENT & SCALE FASTER WITH TRU`}
                    description={`Belong to a diverse group of tech-centric agents scaling their businesses faster than the competition.`}
                />
            </div>
            <div className="col-12 px-0">
                <GradientDivider size="xs" direction="rtl" />
            </div>
        </>
    );
};

export default AgentBanner;
