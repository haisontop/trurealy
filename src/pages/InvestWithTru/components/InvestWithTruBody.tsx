import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import placeholder7 from "../../../assets/image/placeholder7.png";
import tru1 from "../../../assets/image/tru1.png";


const InvestWithTruBody = () => {
    return (
        <Col>
            <Row>
                <Col sm={12} className="p-0">
                    <div className="realestate">
                        <section className="consumer-bg-type-two  pd-60-85 text-left mb-40">
                            <Row>
                                <Col sm={12}>
                                    <h3 className="inner-title">
                                        INVEST WITH TRU
                                    </h3>
                                    <p>
                                        Leading with character has proven to
                                        attract the right agents, help us to
                                        build lasting relationships with our
                                        clients, and establish our reputation
                                        for excellence in the industry. Defining
                                        our values is our way of sharing with
                                        you exactly who we are as professionals
                                        as well as individuals in our community.
                                        Take a look at the attributes that make
                                        Tru Realty one of the fastest-growing
                                        real estate brokerages nationwide.
                                    </p>
                                </Col>
                            </Row>
                        </section>
                        <section className="consumer-texture pd-60-85 text-left">
                            <Row>
                                <Col sm={12} md={6}>
                                    <div className="img stipe-img">
                                        <img
                                            src={placeholder7}
                                            alt="img"
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                </Col>
                                <Col sm={12} md={6}>
                                    <div className="text pl-90">
                                        <h1 className="title">
                                            THESE WOULD BE RELATED STATISTICS.
                                        </h1>

                                        <ul>
                                            <li>
                                                They are provided with innovated
                                                technology to give you the best.
                                            </li>
                                            <li>
                                                They love what they do, it’s
                                                their passion.
                                            </li>
                                            <li>
                                                They value collaboration over
                                                competition.
                                            </li>
                                            <li>
                                                They provide excellent
                                                transaprecny throughout your
                                                experience.
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </section>
                        <section className="tru-investment">
                            <Row>
                                <Col md={6} sm={12}>
                                    <div className="left-sec text-left">
                                        <div className="clients">
                                            <img
                                                src={tru1}
                                                className="image"
                                                alt="img"
                                            />
                                            <p>
                                                “Great Brokerage with great
                                                agents! Highly recommended!”{" "}
                                                <span className="name">
                                                    - Jordan Nielsen
                                                </span>
                                            </p>
                                        </div>
                                        <div className="clients">
                                            <img
                                                src={tru1}
                                                className="image"
                                                alt="img"
                                            />
                                            <p>
                                                “Caring people that go above and
                                                beyond to satisfy the client”{" "}
                                                <span className="name">
                                                    {" "}
                                                    - Paul Peterson
                                                </span>
                                            </p>
                                        </div>
                                        <div className="clients">
                                            <img
                                                src={tru1}
                                                className="image"
                                                alt="img"
                                            />
                                            <p>
                                                “Great company that is changing
                                                the way that Real Estate is
                                                done.”{" "}
                                                <span className="name">
                                                    {" "}
                                                    - Eric Herbert
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} sm={12}>
                                    <div className="consumer-bg-type-two inner">
                                        <h4>BECOME MORE THAN AN INVESTOR</h4>
                                        <h3 className="inner-title mb-40">
                                            BECOME A TRU PARTNER
                                        </h3>
                                        <Button variant="primary theme link">
                                            INVEST
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </section>
                    </div>
                </Col>
            </Row>
        </Col>
    );
};

export default InvestWithTruBody;
