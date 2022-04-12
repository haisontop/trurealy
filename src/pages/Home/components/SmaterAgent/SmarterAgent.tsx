import React from "react";
import { SMATER_DATA } from "../../../../constants";
import Smartercard from "../SmarterCard/SmarterCard";
import styles from "./SmaterAgent.module.scss";

const SmarterAgent = () => {
    return (
        <>
            <div
                className={`container px-0 mx-auto ${styles["smarter-container"]}`}
            >
                <div className={styles["smarter-agent"]}>
                    <div className={`bg-primary ${styles["smarter-box"]} text-white px-5 py-4`}>
                        <div>
                            <h3
                                className="fw-bolder"
                                style={{ fontSize: "30px" }}
                            >
                                HELPING YOU FIND YOUR WAY HOME
                            </h3>
                        </div>
                        <div className="mt-4 fw-medium fw-normal">
                            <p
                                style={{
                                    lineHeight: "28px",
                                    width: "650px",
                                    fontSize: "20px",
                                }}
                            >
                                TRU Realty is a technology driven real estate
                                brokerage that is passionate about educating its
                                agents to better serve our clients - whether
                                they are buying, selling, renting or investing.{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`container row ${styles["Agent-row"]} gx-5 mx-auto`}>
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
