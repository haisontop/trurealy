import React, { useState, useEffect } from "react";
import "./BuildingBloxPodcast.scss";
import Layout from "../../layouts";
import SliderWraper from "./components/SliderWraper";
function BuildingBloxPodcast() {
    return (
        <Layout>
            <section className="BuildingBloxPodcastWarper">
                <div className="w-100">
                    <SliderWraper />
                </div>

                <div className="partnrup_sec cmmn_gap">
                    <div className="custom_container_fluid">
                        <div
                            className="prtnr_box aos-init aos-animate"
                            data-aos="fade-up"
                        >
                            <div className="page_heading text-center">
                                <h2>
                                    Find Us Anywhere, And We Will <br /> Find
                                    Your TRU Calling
                                </h2>
                            </div>
                            <div className="btn_outr">
                                <ul className="btn_lnks">
                                    <li>
                                        {" "}
                                        <a href="#url" className="basic_btn">
                                            Join the Tru Team
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="#url" className="basic_btn">
                                            Become an Agent
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default BuildingBloxPodcast;
