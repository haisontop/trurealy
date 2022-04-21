import React from "react";
import { SMATER_DATA } from "../../../../constants";
import Smartercard from "./SmarterCard";
import style from "./SmarterAgent.module.scss"

const SmarterAgent = () => {
    return (
        <>
            <div className={`container px-0 ${style["smarter-container"]} mx-auto`}>
                <div className={`${style["smarter-agent"]}`}>
                <div className={`bg-primary smarter-box text-white px-5 py-4`}>
                        <div>
                            <h3 className="fw-bolder" >
                                YOUR WAY HOME
                            </h3>
                        </div>
                        <div className="mt-4 fw-medium fw-normal">
                            <p>
                                TRU Realty is a technology driven real estate
                                brokerage that is passionate about educating its
                                agents to better serve our clients - whether
                                they are buying, selling, renting or investing.{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container row Agent-row gx-5 mx-auto">
                    {SMATER_DATA.map((sm) => (
                        <Smartercard
                            key={sm.img}
                            actions={sm.action}
                            discription={sm.discription}
                            link={sm.link}
                            img={sm.img}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SmarterAgent;
