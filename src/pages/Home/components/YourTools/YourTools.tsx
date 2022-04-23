import React from "react";
import { TOOLS_DATA } from "../../../../constants/MORE_TOOLS_MOCK_DATA";
import Smartercard from "../SmarterAgent/SmarterCard";
import styles from "./YourTools.module.scss";

const YourTools = () => {
    return (
        <>
            <div className={`container px-0 mx-auto ${styles["your-tools"]}`}>
                <h5 className="fs-1 text-white fw-bold text-center">
                    YOUR TOOLS FOR SUCCESS
                </h5>
                <div className="fs-3 text-white text-center mb-5">
                    LEVERAGING TECHNOLOGIES & EDUCATION TO BUILD SMARTER AND
                    SCALE FASTER
                </div>

                <div className="container row gx-5 gy-5 mx-auto">
                    {TOOLS_DATA.map((tool) => (
                        <Smartercard
                            key={tool.img}
                            actions={tool.action}
                            discription={tool.discription}
                            link={tool.link}
                            img={tool.img}
                            bgColor="bg-blue"
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default YourTools;
