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

const Navigation = () => {
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

  return (
    <>
      <div
        className={`d-lg-flex  py-2 align-items-center ${
          role === "agent" ? "bg-primary" : ""
        }`}
      >
        <Container className="d-md-flex justify-content-between my-2 py-1">
          <div className="d-flex justify-content-lg-between align-items-center gap-2">
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
              <p
                className={`${
                  role === "agent" ? "text-white" : "text-primary"
                } my-auto icon px-2`}
              >
                <BsMic size="24" />
              </p>
            </Link>
            <Link to="/">
              <p
                className={`${
                  role === "agent" ? "text-white" : "text-primary"
                } icon my-auto`}
              >
                <VscLocation size="27" />
              </p>
            </Link>
            <Link to="/">
              <p
                className={`${
                  role === "agent" ? "text-white" : "text-primary"
                } my-auto icon px-2`}
              >
                <GiUsaFlag size="24" />
              </p>
            </Link>
            <Link to="/">
              <p
                className={`${
                  role === "agent" ? "text-white" : "text-primary"
                } my-auto icon px-2`}
              >
                <BiSearchAlt size="24" />
              </p>
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
                About
              </Nav.Link>
            </Link>
            <Link to="/tru-u" className="text-decoration-none my-auto">
              <Nav.Link
                className={`fs-5  d-flex align-items-center  mx-3 ${
                  role === "agent" ? "text-primary" : "text-light"
                }`}
                href="/tru-u"
              >
                Tru U
              </Nav.Link>
            </Link>
            <Link to="/tech" className="text-decoration-none my-auto">
              <Nav.Link
                className={`fs-5  d-flex align-items-center ${
                  role === "agent" ? "text-primary" : "text-light"
                }`}
                href="/tech"
              >
                Tech
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
                Homes
              </Nav.Link>
            </Link>
            <Link to="/join" className="text-decoration-none my-auto">
              <Nav.Link
                className={`fs-5 d-flex align-items-center mx-3 ${
                  role === "agent" ? "text-primary" : "text-light"
                }`}
                href="/join"
              >
                Join
              </Nav.Link>
            </Link>
            <Link to="/invest" className="text-decoration-none my-auto">
              <Nav.Link
                className={`fs-5 d-flex align-items-center ${
                  role === "agent" ? "text-primary" : "text-light"
                }`}
                href="/invest"
              >
                Invest
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
    </>
  );
};

export default Navigation;
