import React from "react";
import style from "./PrelicenseMiddle.module.scss";

export default function PrelicenseMiddleCard() {
    const data = [
        {
            img: "/assets/Group 287.png",
            title: "BETTER WORK-LIFE BALANCE",
            details:
                "Never miss another moment, game, practice, recital, date or dinner ever again! Set your own hours, be your own boss and work from anywhere.",
        },
        {
            img: "/assets/Group 289.png",
            title: "BETTER PAY, BETTER BENEFITS",
            details:
                "According to the National Association of Realtors, work at least 21 hours p/wk earn up to $56,521, work at least 41 hours and earn up to $99,378.",
        },
        {
            img: "/assets/Group 291.png",
            title: "BETTER CULTURE, BETTER VALUES",
            details:
                "Belong to a diverse group of forward-thinking, tech-centric, growth minded agents who value collaboration over competition.",
        },
    ];
    return (
        <div
            className={`container-fluid mx-auto px-0 position-relative ${style["prelicense-middle"]}`}
        >
            <div className="text-center">
                <h1 className="text-white m-0 fw-bold display-1">
                    YOU DESERVE BETTER
                </h1>
                <h3 className="text-white mt-1 mb-0 fw-normal display-2">
                    PART TIME. FULL TIME. ALWAYS MORE TIME.
                </h3>
            </div>
            <div>
                <div className={style["prelicense-gradiant"]} />
                <div
                    className={`row gap-0 row-gap-2 mx-auto px-5 ${style["prelicense-gradiant-body"]}`}
                >
                    {data.map((dt) => (
                        <div className="col-12 col-md-4">
                            <div
                                className={`text-white overflow-hidden p-4 mx-2 ${style["prilicens-card"]}`}
                            >
                                <div className="text-center">
                                    <img
                                        src={dt.img}
                                        alt=""
                                        className="img-fulid mx-auto"
                                    />
                                    <h3
                                        className="text-start fw-medium"
                                        style={{
                                            fontSize: "35px",
                                            marginTop: "66px",
                                        }}
                                    >
                                        {dt.title}
                                    </h3>
                                    <p
                                        className="text-start mt-5"
                                        style={{ fontSize: "25px" }}
                                    >
                                        {dt.details}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5">
                    <button className="bg-pink px-5 fs-3 text-white border-0 rounded rounded-5">
                        I'M READY
                    </button>
                </div>
            </div>
        </div>
    );
}
