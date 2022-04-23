import React from "react";
import { Row, Col } from "react-bootstrap";
import PodcastCarousel from "./PodcastCarousel";

const BuildingBloxPodcast = () => {
    return (
        <div className="w-100">
            <div
                className="podcast_sec cmmn_gap big_top_gap"
                style={{
                    backgroundImage: "url('img/21.png') , url('img/22.png')",
                }}
            >
                <div className="custom_container_fluid">
                    <div className="page_lrge_heading">
                        <h1>
                            <span>THE TRU PODCAST</span>
                            FOR REALTORS
                        </h1>
                    </div>
                    <div className="">
                        <PodcastCarousel />
                    </div>
                </div>
                <div className="shape1">
                    <img src="images/shape1.svg" alt="" />
                </div>
                <div className="shape2">
                    <img src="images/shape2.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BuildingBloxPodcast;
