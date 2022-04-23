import React from "react";
import { SMATER_DATA } from "../../../../constants";
import SmarterCard from "./SmarterCard";
import style from "./SmarterAgent.module.scss";

const SmarterAgent = () => {
    return (
        <>
            <div
                className={`container px-0 ${style["smarter-container"]} mx-auto`}
            >
                <div className={`${style["smarter-agent"]}`}>
                    <div
                        className={`bg-primary ${style["smarter-box"]} text-white px-5 py-4`}
                    >
                        <div>
                            <h3 className="fw-bolder">FIND YOUR WAY HOME</h3>
                        </div>
                        <div className="mt-4">
                            <p>
                                TRU Realty is a technology driven real estate
                                brokerage that is passionate about educating its
                                agents to better serve our clients - whether
                                they are buying, selling, renting or investing.{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container px-md-5 row Agent-row gx-5 mx-auto">
                    {SMATER_DATA.map((sm) => (
                        <SmarterCard
                            key={sm.img}
                            actions={sm.action}
                            discription={sm.discription}
                            link={sm.link}
                            img={sm.img}
                            bgColor="bg-pink"
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SmarterAgent;
