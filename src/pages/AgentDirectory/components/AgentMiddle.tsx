import React from "react";
import Slider from "react-slick";
import { AGENT_DIRECTORY_DATA } from "../../../constants";
import AgentMiddleCard from "./AgentMiddleCard/AgentMiddleCard";
import style from "./AgentMiddleCard/AgentMiddleCard.module.scss";

function AgentMiddle() {
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        rows: 3,
      };
    return (
        <div className={`g-5 px-5 position-relative ${style["Agent-middle"]}`}>
            <Slider {...settings}>
            {AGENT_DIRECTORY_DATA.map((ag) => (
                <AgentMiddleCard
                    key={ag.img}
                    img={ag.img}
                    name={ag.name}
                    email={ag.email}
                    about={ag.about}
                    website={ag.website}
                />
            ))}
            </Slider>
            <div className="text-center">

            </div>
        </div>
    );
}

export default AgentMiddle;
