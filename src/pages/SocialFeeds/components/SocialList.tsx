import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import placeholder8 from "../../../assets/image/placeholder8.png";

export default function SocialList() {
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);

  const onClickFirst = () => {
    setShowFirst(false);
    setShowSecond(true);
  };
  const onClickSecond = () => {
    setShowFirst(true);
    setShowSecond(false);
  };
  return (
    <>
      <Row>
        <Col sm={12}>
          <div className="social-title">
            <h3>TWITTER & FACEBOOK</h3>
          </div>
        </Col>
      </Row>
      <div className="blue-bg">
        {showFirst ? (
          <Row>
            <Col sm={4} className="px-0">
              <div className="item b-r-b b-bottom">
                <p>
                  God help us, we're in the hands of engineers. Must go
                  faster... go, go, go, go, go! What do they got in there? King
                  Kong? God creates...
                </p>
                <div className="readmore">
                  <h3 onClick={onClickFirst}>READ MORE</h3>
                  <FaFacebookF />
                </div>
              </div>
            </Col>
            <Col sm={4} className="px-0">
              {" "}
              <div className="item b-r-b b-bottom">
                <p>
                  God help us, we're in the hands of engineers. Must go
                  faster... go, go, go, go, go! What do they got in there? King
                  Kong? God creates...
                </p>
                <div className="readmore">
                  <h3>READ MORE</h3>
                  <FaFacebookF />
                </div>
              </div>
            </Col>
            <Col sm={4} className="px-0">
              {" "}
              <div className="item b-b b-bottom">
                <p>
                  God help us, we're in the hands of engineers. Must go
                  faster... go, go, go, go, go! What do they got in there? King
                  Kong? God creates...
                </p>
                <div className="readmore">
                  <h3>READ MORE</h3>
                  <FaFacebookF />
                </div>
              </div>
            </Col>
            <Col sm={4} className="px-0">
              {" "}
              <div className="item b-r b-bottom">
                <p>
                  God help us, we're in the hands of engineers. Must go
                  faster... go, go, go, go, go! What do they got in there? King
                  Kong? God creates...
                </p>
                <div className="readmore">
                  <h3>READ MORE</h3>
                  <FaFacebookF />
                </div>
              </div>
            </Col>
            <Col sm={4} className="px-0">
              {" "}
              <div className="item b-r b-bottom">
                <p>
                  God help us, we're in the hands of engineers. Must go
                  faster... go, go, go, go, go! What do they got in there? King
                  Kong? God creates...
                </p>
                <div className="readmore">
                  <h3>READ MORE</h3>
                  <FaFacebookF />
                </div>
              </div>
            </Col>
            <Col sm={4} className="px-0">
              {" "}
              <div className="item">
                <p>
                  God help us, we're in the hands of engineers. Must go
                  faster... go, go, go, go, go! What do they got in there? King
                  Kong? God creates...
                </p>
                <div className="readmore">
                  <h3>READ MORE</h3>
                  <FaFacebookF />
                </div>
              </div>
            </Col>
          </Row>
        ) : null}
        {showSecond ? (
          <Row className="detail">
            <Col sm={5} className="px-0">
              <div className="item">
                <p>
                  God help us, we're in the hands of engineers. Must go
                  faster... go, go, go, go, go! What do they got in there? King
                  Kong? God creates dinosaurs. God destroys dinosaurs. God
                  creates Man. Man destroys God. Man creates Dinosaurs. Yes,
                  Yes, without the oops!
                </p>
                <div className="readmore">
                  <h3 onClick={onClickSecond}>back</h3>
                  <FaFacebookF />
                </div>
              </div>
            </Col>
            <Col sm={7}>
              <div className="img">
                {" "}
                <img src={placeholder8} className="w-100" alt="img" />
              </div>
            </Col>
          </Row>
        ) : null}
      </div>
    </>
  );
}
