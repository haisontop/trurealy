import React from "react";
import { TRU_STORY_DATA } from "../../../../constants";
import style from "./Trastory.module.scss";

const Trastory = () => {
    return (
        <div
            className={`container row mx-auto px-3 position-relative py-5 ${style["trastory"]}`}
        >
            <div className="col-6 text-primary">
                <h2 className="mt-4">
                    WE LOVE OUR CLIENTS & <br /> THEY LOVE US BACK
                </h2>
                <div className="mt-5">
                    <h2>WHY CHOOSE TRU?</h2>
                    <p>
                        We’re committed to being the most knowledgable agents in
                        the USA.
                    </p>
                </div>
                <p className="mt-5">
                    We’re powered by TRU local agent experts who know every
                    amenity, style, floor plan, shopping mall, park and school
                    district. Our agents are passionate and qualified, competent
                    and confident. The goal has always been to provide
                    outstanding client service and support the communities we
                    serve. Whether it’s your first home or a high-end luxury
                    purchase, partner with TRU and experience real estate like
                    never before.
                </p>
                <button className="bg-pink fs-4 text-white border-0 px-5 py-2 mt-4">
                    FIND AN AGENT
                </button>
            </div>
            <div className="col-6">
                <div className={`${style["trastory-box"]}`}>
                    <div
                        className={`bg-primary text-white ${style["trastory-child"]}`}
                    >
                        <div className="d-flex m-5">
                            <h1 className="fw-bold">#TruStory</h1>
                            <div>
                                <img
                                    src="/assets/love.png"
                                    className="img-fluid m-3"
                                    width="80px"
                                    alt=""
                                />
                            </div>
                        </div>
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
                                <div className="col-9">
                                    <p className="my-0 fw-lighter">
                                        {ts.massage}
                                    </p>
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
