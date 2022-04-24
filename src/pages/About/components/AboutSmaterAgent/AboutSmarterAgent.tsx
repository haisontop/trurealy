import React from "react";
import style from "./AboutSmarterAgent.module.scss";

const AboutSmarteragent = () => {
    return (
        <div className={`bg-primary ${style["about-smarter-agent"]}`}>
            <div>
                <div className="">
                    <div className="row container mx-auto px-4 gx-5">
                        <div className="col-5">
                            <div>
                                <img
                                    src="/assets/tammy.png"
                                    className="img-fluid p-3"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-7 text-white d-flex aling-item-center">
                            <div className="my-auto">
                                <h2 className="fw-bold">
                                    LEADING WITH CHARACTER AND INTEGRITY - TRU
                                    AGENTST
                                </h2>
                                <p className="my-5">
                                    Leading with character and integrity has
                                    helped us attract the right agents, build
                                    lasting relationships, and establish our
                                    reputation for excellence in education.
                                </p>
                                <p>
                                    All TRU Realty agents receive
                                    state-of-the-art training including hands-on
                                    experience, meeting with industry
                                    professionals, and routine round-table
                                    discussions with mentors. When you choose
                                    TRU, you choose a better experience and a
                                    smarter agent.
                                </p>
                                <button className="bg-pink px-5 text-white fw-medium le py-2 border-0 mt-5">
                                    MATCH ME WITH AN AGENT
                                </button>
                                <p className="fw-light mt-5 ">
                                    Tammy Peil, TRU Agent
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSmarteragent;
