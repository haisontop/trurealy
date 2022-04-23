import React from "react";
import { GradientDivider } from "../../../../components/GradientDivider";
import { BannerText } from "../BannerText/BannerText";
import style from "./AgentBanner.module.scss";

const AgentBanner = () => {
    return (
        <>
            <div
                className={`container verflow-hidden px-0 position-relative ${style["agent-banner"]}`}
            >
                <img src="/assets/agent1.png" alt="" className="img-fluid" />
                <BannerText
                    title={`Become a better agent at tru`}
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
