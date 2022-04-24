import React from "react";
import style from "./AboutBottom.module.scss";

const AboutBottom = () => {
    return (
        <div className="text-center">
            <div
                className={`container mx-auto text-white ${style["about-bottom"]}`}
            >
                <h1>FIND YOUR DREAM HOME</h1>
                <div>
                    <button className="bg-pink px-5 text-white fs-4 fw-normal le py-2 me-2 border-0 mt-4">
                        FIND YOUR AGENT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutBottom;
