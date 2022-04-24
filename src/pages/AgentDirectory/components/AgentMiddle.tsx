import React from "react";
import Slider from "react-slick";
import { AGENT_DIRECTORY_DATA } from "../../../constants";
import AgentMiddleCard from "./AgentMiddleCard/AgentMiddleCard";
import style from "./AgentMiddleCard/AgentMiddleCard.module.scss";

function AgentMiddle() {
    const settings = {
        dots: true,
        dotsClass: `slick-dots ${style["custom-dots"]}`,
        className: "center",
        centerMode: true,
        infinite: false,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        rows: 3,
        appendDots: (dots: any) => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <ul> {dots} </ul>
            </div>
          ),
          customPaging: (i: number) => (
            <div
              style={{
                width: "30px",
                color: "#292670",
                border: "1px #292670 solid",
              }}
              className="gx-5 fs-3"
            >
              {i + 1}
            </div>
          )
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
