import { Link } from "react-router-dom";
import React, { useState } from "react";
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

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState("");
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
              onClick={() => setRole("consumer")}
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
              onClick={() => setRole("agent")}
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
            <Link to="/about" className="text-decoration-none my-auto">
              <Nav.Link
                className={`fs-5  d-flex align-items-center ${
                  role === "agent" ? "text-primary" : "text-light"
                }`}
                to="/about"
              >
                About
              </Nav.Link>
            </Link>
            <Link to="/tru-u" className="text-decoration-none my-auto">
              <Nav.Link
                className={`fs-5  d-flex align-items-center  mx-3 ${
                  role === "agent" ? "text-primary" : "text-light"
                }`}
                to="/tru-u"
              >
                Tru U
              </Nav.Link>
            </Link>
            <Link to="/tech" className="text-decoration-none my-auto">
              <Nav.Link
                className={`fs-5  d-flex align-items-center ${
                  role === "agent" ? "text-primary" : "text-light"
                }`}
                to="/tech"
              >
                Tech
              </Nav.Link>
            </Link>
          </div>
          <div className="mx-3 px-5">
            <img
              src={`${
                role === "agent" ? "/assets/logo.png" : "/assets/logo-white.png"
              }`}
              alt=""
              height="67px"
              // width={`${
              //   role === "agent"
              //     ? "306px"
              //     : "269px"
              // }`}
              width="267px"
            />
          </div>
          <div className="d-flex">
            <Link to="/homes" className="text-decoration-none my-auto">
              <Nav.Link
                className={`fs-5  d-flex align-items-center ${
                  role === "agent" ? "text-primary" : "text-light"
                }`}
                to="/homes"
              >
                Homes
              </Nav.Link>
            </Link>
            <Link to="/join" className="text-decoration-none my-auto">
              <Nav.Link
                className={`fs-5 d-flex align-items-center mx-3 ${
                  role === "agent" ? "text-primary" : "text-light"
                }`}
                to="/join"
              >
                Join
              </Nav.Link>
            </Link>
            <Link to="/invest" className="text-decoration-none my-auto">
              <Nav.Link
                className={`fs-5 d-flex align-items-center ${
                  role === "agent" ? "text-primary" : "text-light"
                }`}
                to="/invest"
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
                  to="/about"
                >
                  About
                </Nav.Link>
              </Link>
              <Link to="/tru-u" className="text-decoration-none">
                <Nav.Link
                  className={`fs-5 ${
                    role === "consumer" ? "text-primary" : "text-light"
                  } d-flex align-items-center`}
                  to="/tru-u"
                >
                  Tru U
                </Nav.Link>
              </Link>
              <Link to="/tech">
                <Nav.Link
                  className={`fs-5 ${
                    role === "consumer" ? "text-primary" : "text-light"
                  } d-flex align-items-center`}
                  to="/tech"
                >
                  Tech
                </Nav.Link>
              </Link>
              <Link to="/homes" className="text-decoration-none">
                <Nav.Link
                  className={`fs-5 ${
                    role === "consumer" ? "text-primary" : "text-light"
                  } d-flex align-items-center`}
                  to="/homes"
                >
                  Homes
                </Nav.Link>
              </Link>
              <Link to="/join" className="text-decoration-none">
                <Nav.Link
                  className={`fs-5 ${
                    role === "consumer" ? "text-primary" : "text-light"
                  } d-flex align-items-center`}
                  to="/join"
                >
                  Join
                </Nav.Link>
              </Link>
              <Link to="/invest" className="text-decoration-none">
                <Nav.Link
                  className={`fs-5 ${
                    role === "consumer" ? "text-primary" : "text-light"
                  } d-flex align-items-center`}
                  to="/invest"
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
