import { Link, useLocation, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BsMic } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";
import { GiUsaFlag } from "react-icons/gi";
import { AiOutlineAlignRight, AiFillCaretRight } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { BiSearchAlt } from "react-icons/bi";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useScript from "../hooks/useScript";

const CONSUMER_BOT = {
  url: "https://widget.botcopy.com/js/injection.js",
  id: "botcopy-embedder-d7lcfheammjct",
  className: "botcopy-embedder-d7lcfheammjct",
  botId: "6247a98681ff7c0009297331",
  elementId: "botcopy-d7lcfheammjct"
};

const AGENT_BOT = {
  url: "https://widget.botcopy.com/js/injection.js",
  id: "botcopy-embedder-d7lcfheammjct",
  className: "botcopy-embedder-d7lcfheammjct",
  botId: "62463878baa1eb00097705f1",
  elementId: "botcopy-d7lcfheammjct"
};

const Navigation = () => {
  const [botData, setBotData] = useState(CONSUMER_BOT);

  useScript(botData.url, botData.id, botData.className, botData.botId, botData.elementId);

  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  let location = useLocation();

  const handleSelectConsumer = () => {
    navigate("/consumer/home");
  };

  const handleSelectAgent = () => {
    navigate("/agent/home");
  };

  useEffect(() => {
    const locations = location.pathname.split("/");
    if (locations.length > 0) {
      if (locations[1] === "consumer") {
        setRole("consumer");
      } else if (locations[1] === "agent") {
        setRole("agent");
      }
    }
  }, [location]);

  useEffect(() => {
    if (role === "agent") {
      setBotData(AGENT_BOT);
    } else {
      setBotData(CONSUMER_BOT);
    }
  }, [role]);

  return (
    <div className="position-sticky top-0 index-100 z-index-100">
      <div
        className={`d-lg-flex  py-0 align-items-center  ${
          role === "agent" ? "bg-primary" : "bg-white"
        }`}
      >
        <Container className="d-md-flex justify-content-between my-2 py-1">
          <div className="d-flex justify-content-lg-between align-items-center gap-2">
            <div className="d-flex mx-lg-3 align-items-center">
              <Link to="/" className="text-decoration-none">
                <Nav.Link
                  className={`px-1 ${
                    role === "agent" ? "text-white" : "text-primary"
                  }`}
                >
                  Invest
                </Nav.Link>
              </Link>

              <Link to="/" className="text-decoration-none">
                <Nav.Link
                  className={`px-1 ${
                    role === "agent" ? "text-white" : "text-primary"
                  }`}
                >
                  Join
                </Nav.Link>
              </Link>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Button
              className={`mr-1 px-0 py-0 min-height-content px-1  ${
                role === "consumer"
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              }`}
              type="button"
              variant="light"
              onClick={handleSelectConsumer}
            >
              Consumer
            </Button>
            <Button
              className={`px-0 py-0 min-height-content px-1 text-primary ${
                role === "agent"
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              }`}
              variant="light"
              onClick={handleSelectAgent}
            >
              Agent
            </Button>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex mx-lg-3 align-items-center">
              <Link to="/" className="text-decoration-none">
                <Nav.Link
                  className={`px-1 ${
                    role === "agent" ? "text-white" : "text-primary"
                  }`}
                >
                  Sign in
                </Nav.Link>
              </Link>
              <span
                className={`${
                  role === "agent" ? "text-white" : "text-primary"
                }`}
              >
                /
              </span>
              <Link to="/" className="text-decoration-none">
                <Nav.Link
                  className={`px-1 ${
                    role === "agent" ? "text-white" : "text-primary"
                  }`}
                >
                  Register
                </Nav.Link>
              </Link>
            </div>
            <Link to="/">
              <img
                src="/assets/Group 138.png"
                className={`${
                  role === "agent" ? "text-white" : "text-primary"
                } my-auto icon px-2`}
                width="37px"
              />
            </Link>
            <Link to="/">
              <img
                src="/assets/location-ico.png"
                className={`${
                  role === "agent" ? "text-white" : "text-primary"
                } my-auto icon px-2`}
                width="39px"
              />
            </Link>
            <Link to="/">
              <img
                src="/assets/us-flag.png"
                className={`${
                  role === "agent" ? "text-white" : "text-primary"
                } my-auto icon px-2`}
                width="39px"
              />
            </Link>
            <Link to="/">
              <img
                src="/assets/Group 25.png"
                className={`${
                  role === "agent" ? "text-white" : "text-primary"
                } my-auto icon px-2`}
                width="40px"
              />
            </Link>
          </div>
        </Container>
      </div>
      <div
        className={`d-none d-lg-flex  py-2 align-items-center ${
          role === "agent" ? "" : "bg-primary"
        }`}
      >
        <Container className="d-flex justify-content-center mx-10">
          <div className="d-flex">
            <Link
              to={`/${role}/about`}
              className="text-decoration-none my-auto"
            >
              <Nav.Link
                className={`fs-5  d-flex align-items-center text-decoration-none my-auto ${
                  role === "agent" ? "text-primary" : "text-light"
                }`}
                href={!!role ? `/${role}/about` : ""}
              >
                BUY
              </Nav.Link>
            </Link>
            <Link to="/tru-u" className="text-decoration-none my-auto">
              <Nav.Link
                className={`fs-5  d-flex align-items-center  mx-3 ${
                  role === "agent" ? "text-primary" : "text-light"
                }`}
                href="/tru-u"
              >
                SELL
              </Nav.Link>
            </Link>
            <Link to="/tech" className="text-decoration-none my-auto">
              <Nav.Link
                className={`fs-5  d-flex align-items-center ${
                  role === "agent" ? "text-primary" : "text-light"
                }`}
                href="/tech"
              >
                RENT
              </Nav.Link>
            </Link>
          </div>
          <div className="mx-3 px-5">
            <Link to="/">
              <img
                src={`${
                  role === "agent"
                    ? "/assets/logo.png"
                    : "/assets/logo-white.png"
                }`}
                alt=""
                height="67px"
                width="267px"
              />
            </Link>
          </div>
          <div className="d-flex">
            <Link to="/homes" className="text-decoration-none my-auto">
              <Nav.Link
                className={`fs-5  d-flex align-items-center ${
                  role === "agent" ? "text-primary" : "text-light"
                }`}
                href="/homes"
              >
                AGENTS
              </Nav.Link>
            </Link>
            <Link to="/join" className="text-decoration-none my-auto">
              <Nav.Link
                className={`fs-5 d-flex align-items-center mx-3 ${
                  role === "agent" ? "text-primary" : "text-light"
                }`}
                href="/join"
              >
                ABOUT
              </Nav.Link>
            </Link>
            <Link to="/invest" className="text-decoration-none my-auto">
              <Nav.Link
                className={`fs-5 d-flex align-items-center ${
                  role === "agent" ? "text-primary" : "text-light"
                }`}
                href="/invest"
              >
                CONTACT
              </Nav.Link>
            </Link>
          </div>
        </Container>
      </div>
      {/*============ responsive navbar ==========*/}
      <div
        className={`d-lg-none d-sm-flex py-3 ${
          role === "agent" ? "" : "bg-primary"
        }`}
      >
        <Container className="d-flex justify-content-between">
          <img
            src={`${
              role === "agent" ? "/assets/logo.png" : "/assets/logo-white.png"
            }`}
            alt="logo"
            width="160px"
          />
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className={
              role === "agent" ? "text-primary bg-light" : "bg-primary"
            }
            variant={role === "agent" ? "light" : "dark"}
          >
            <AiOutlineAlignRight size="20" />
          </Button>
        </Container>
      </div>
      {/*=========== menu item ============*/}
      {isOpen && (
        <div>
          <div
            className={`fixed-top nav-height ${
              role === "consumer" ? "bg-white" : "bg-primary"
            }`}
          >
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="m-2 bg-primary"
            >
              <ImCross />
            </Button>
            <Container className="middle-nav">
              <Link to="/about">
                <Nav.Link
                  className={`fs-5 ${
                    role === "consumer" ? "text-primary" : "text-light"
                  } d-flex align-items-center`}
                  href="/about"
                >
                  About
                </Nav.Link>
              </Link>
              <Link to="/tru-u" className="text-decoration-none">
                <Nav.Link
                  className={`fs-5 ${
                    role === "consumer" ? "text-primary" : "text-light"
                  } d-flex align-items-center`}
                  href="/tru-u"
                >
                  Tru U
                </Nav.Link>
              </Link>
              <Link to="/tech">
                <Nav.Link
                  className={`fs-5 ${
                    role === "consumer" ? "text-primary" : "text-light"
                  } d-flex align-items-center`}
                  href="/tech"
                >
                  Tech
                </Nav.Link>
              </Link>
              <Link to="/homes" className="text-decoration-none">
                <Nav.Link
                  className={`fs-5 ${
                    role === "consumer" ? "text-primary" : "text-light"
                  } d-flex align-items-center`}
                  href="/homes"
                >
                  Homes
                </Nav.Link>
              </Link>
              <Link to="/join" className="text-decoration-none">
                <Nav.Link
                  className={`fs-5 ${
                    role === "consumer" ? "text-primary" : "text-light"
                  } d-flex align-items-center`}
                  href="/join"
                >
                  Join
                </Nav.Link>
              </Link>
              <Link to="/invest" className="text-decoration-none">
                <Nav.Link
                  className={`fs-5 ${
                    role === "consumer" ? "text-primary" : "text-light"
                  } d-flex align-items-center`}
                  href="/invest"
                >
                  Invest
                </Nav.Link>
              </Link>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
