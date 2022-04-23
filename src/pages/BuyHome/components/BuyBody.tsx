import React from "react";
import { Row, Col } from "react-bootstrap";
export default function BuyBody() {
    return (
        <div className="position-relative podcast-section pd-85-170">
            <h1 className="inner-title">FIND YOUR TRU HOME</h1>
            <hr />
            <p className="mt-40">
                A home purchase is more than a transaction, it’s a life changer.
                Tru Realty works with you throughout the buying process, from
                browsing properties to making a carefully negotiated offer. If
                you’re looking to buy a home, our friendly and knowledgeable
                real estate agents are here to help you exceed your real estate
                goals.
            </p>
            <p>
                Tru agents will help you explore the many wonderful homes for
                sale in the communities you might call home.
            </p>
            <Row className="mt-5">
                <Col sm={4}>
                    <div className="buysec">
                        {" "}
                        <img
                            src="/assets/Rectangle 170.png"
                            className="img-fluid"
                            alt=""
                        />
                        <p>AL</p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="buysec">
                        {" "}
                        <img
                            src="/assets/Rectangle 170.png"
                            className="img-fluid"
                            alt=""
                        />
                        <p>AR</p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="buysec">
                        {" "}
                        <img
                            src="/assets/Rectangle 170.png"
                            className="img-fluid"
                            alt=""
                        />
                        <p>AZ</p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="buysec">
                        {" "}
                        <img
                            src="/assets/Rectangle 170.png"
                            className="img-fluid"
                            alt=""
                        />
                        <p>CA</p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="buysec">
                        {" "}
                        <img
                            src="/assets/Rectangle 170.png"
                            className="img-fluid"
                            alt=""
                        />
                        <p>CO</p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="buysec">
                        {" "}
                        <img
                            src="/assets/Rectangle 170.png"
                            className="img-fluid"
                            alt=""
                        />
                        <p>CT</p>
                    </div>
                </Col>
            </Row>
            <img
                src="/assets/Path 114.png"
                className="img-fluid position-absolute top-0 end-0"
                width="200px"
                alt=""
                style={{ marginTop: "-50px", zIndex: "-100" }}
            />
            <img
                src="/assets/Path 107.png"
                className="img-fluid position-absolute start-0 bottom-0"
                width="300px"
                alt=""
                style={{ marginBottom: "-50px", zIndex: "-100" }}
            />
        </div>
    );
}
