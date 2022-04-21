import React from "react";
import { Row, Col } from "react-bootstrap";
import PodcastCarousel from "./PodcastCarousel";


const BuildingBloxPodcast = () => {
    return (
        <Col>
            <Row>
                <Col sm={12} className="p-0">
                <section className="podcast-section pd-85-170 text-left">
            <div className="semi-circle"></div>
            <Row>
              <Col sm={12}>
                <h1 className="inner-title">THE TRU PODCAST</h1>
                <hr />
                <h1 className="inner-title mb-40">FOR REALTORS</h1>
              </Col>
            </Row>

            <PodcastCarousel />
            <div className="semi-circle-bottom"></div>
          </section>
                </Col>
            </Row>
        </Col>
    );
};

export default BuildingBloxPodcast;
