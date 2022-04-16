import React from "react";
import { TRU_STORY_DATA } from "../../../../constants";

const Trastory = () => {
    return (
        <div className={`container row mx-auto px-3 position-relative ${styles["trastory"]}`}>
            <div className="col-6 text-primary">
                <div>
                    <h3 className="fw-bold">
                        We love our clients & <br /> they love us back.
                    </h3>
                </div>
                <div>
                    <h3 className="fw-bolder mt-5">WHY CHOOSE TRU?</h3>
                    <div className={styles["peragraph"]}>
                       <p className="m-t0">
                          We’re committed to being the most <br /> knowledgable agents in the USA.
                       </p>
                       <p className="mt-5">
                       We’re powered by TRU local agent experts who know every amenity, style, floor plan, shopping mall, park and school district. Our agents are passionate and qualified, competent and confident. The goal has always been to provide outstanding client service and support the communities we serve. Whether it’s your first home or a high-end luxury purchase, partner with TRU and experience real estate like never before.
                       </p>
                    </div>
                    <button
                        className="bg-pink px-4 fs-5 le py-1 border-0 text-white"
                        style={{ borderRadius: "10px", marginTop: "100px" }}
                    >
                        FIND AN AGENT
                    </button>
                </div>
            </div>
            <div className="col-6">
                <div className="trastory-box">
                    <div className="bg-primary text-white trastory-child">
                        {TRU_STORY_DATA.map((ts) => (
                            <div className="row gx-0 mt-5">
                                <div className="col-3 d-flex justify-content-centre aling-item-centre">
                                    <img
                                        src={ts.img}
                                        className="img-fluid m-auto"
                                        width="70px"
                                        alt=""
                                    />
                                </div>
                                <div className="col-6">
                                    <p className="my-0">{ts.massage}</p>
                                    <p className="my-0 fw-bold">{ts.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trastory;
