import React from "react";
import { SMATER_DATA } from "../../constants/SMARTER_MOCK_DATA";
import Smartercard from "./SmarterCard";

const SmarterAgent = () => {
    return (
        <>
            <div className="container px-0 smarter-container mx-auto">
                <div className="smarter-agent">
                    <div className="bg-primary smarter-box text-white p-5">
                        <div>
                            <h3 className="fw-bolder">
                                SMARTER AGENTS MEAN BETTER EXPERIENCES
                            </h3>
                        </div>
                        <div className="mt-4 fs-5">
                            <p>
                                Here at TRU Realty we’ve elevated the quality of
                                service to our clients by providing an
                                unprecedented amount of support to our real
                                estate agents.{" "}
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
