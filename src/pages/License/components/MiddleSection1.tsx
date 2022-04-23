import React from "react";

export default function MiddleSection1() {
    return (
        <div>
            {" "}
            <div className="text-center text-2 ">
                <h1>YOU DESERVE BETTER.</h1>
                <h2>
                    <i>BETTER TECH. BETTER EDUCATION. BETTER AGENTS.</i>
                </h2>
            </div>
            <div className="d-flex justify-content-end">
                <div className="gradBox">
                    <div className="innerGradBox">
                        <div className="cardBox d-flex flex-wrap px-2 ">
                            <div className="col-12 col-md-4  p-2">
                                <div className="licenceHoverCard  p-2">
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <h4 className="title">BETTER TECHNOLOGY</h4>
                                    <p>
                                        Never miss another moment, game,
                                        practice, recital, date or dinner ever
                                        again! Set your own hours, be your own
                                        boss and work from anywhere.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 p-2">
                                <div className="licenceHoverCard p-2 ">
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <h4 className="title">BETTER EDUCATION</h4>
                                    <p>
                                        According to the National Association of
                                        Realtors, work at least 21 hours p/wk
                                        earn up to $56,521, work at least 41
                                        hours and earn up to $99,378.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 p-2">
                                <div className="licenceHoverCard p-2 ">
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <h4 className="title">BETTER AGENTS</h4>
                                    <p>
                                        Belong to a group of like minded,
                                        forward-thinking, tech-centric, talented
                                        and diverse agents who value
                                        collaboration over competition.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center my-2">
                            <button
                                className="bg-pink px-5 text-white fs-4 fw-normal le py-2 me-2 border-0 mt-3"
                                style={{ borderRadius: "10px" }}
                            >
                                I'M READY!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
