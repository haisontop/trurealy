import React from "react";
import { AGENT_DIRECTORY_DATA } from "../../../constants";
import AgentMiddleCard from "./AgentMiddleCard";

function AgentMiddle() {
    return (
        <div className="row g-5 px-5 mt-5 position-relative">
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
            <div className="text-center"></div>
        </div>
    );
}

export default AgentMiddle;
