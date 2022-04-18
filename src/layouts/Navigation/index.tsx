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
import useScript from "../../hooks/useScript";

const CONSUMER_BOT = {
    url: "https://widget.botcopy.com/js/injection.js",
    id: "botcopy-embedder-d7lcfheammjct",
    className: "botcopy-embedder-d7lcfheammjct",
    botId: "6247a98681ff7c0009297331",
    elementId: "botcopy-d7lcfheammjct",
};

const AGENT_BOT = {
    url: "https://widget.botcopy.com/js/injection.js",
    id: "botcopy-embedder-d7lcfheammjct",
    className: "botcopy-embedder-d7lcfheammjct",
    botId: "62463878baa1eb00097705f1",
    elementId: "botcopy-d7lcfheammjct",
};

const Navigation = () => {
    const [botData, setBotData] = useState(CONSUMER_BOT);

    useScript(
        botData.url,
        botData.id,
        botData.className,
        botData.botId,
        botData.elementId
    );

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
        <div className="mainindex">
            <div>
                <div>
                    <div
                        className={`d-none d-lg-block d-lg-flex  py-0 align-items-center  ${
                            role === "agent" ? "bg-white" : "bg-[#0f0e4d]"
                        }`}
                    >
                        <Container className="d-md-flex justify-content-between my-3  py-1">
                            <div className="d-flex justify-content-lg-between align-items-center gap-2">
                                <div className="d-flex mx-lg-3 align-items-center">
                                    <Link
                                        to="/"
                                        className="text-decoration-none"
                                    >
                                        <Nav.Link
                                            className={`px-1 ${
                                                role === "agent"
                                                    ? "text-white"
                                                    : "text-primary"
                                            }`}
                                        >
                                            INVEST
                                        </Nav.Link>
                                    </Link>

                                    <Link
                                        to="/"
                                        className="text-decoration-none"
                                    >
                                        <Nav.Link
                                            className={`px-1 ${
                                                role === "agent"
                                                    ? "text-white"
                                                    : "text-primary"
                                            }`}
                                        >
                                            JOIN
                                        </Nav.Link>
                                    </Link>
                                </div>
                            </div>
                            <div className="d-flex justify-content-lg-between align-items-center gap-2">
                                <Button
                                    className={`mr-1 px-0 py-0 min-height-content agentConsumers px-1  ${
                                        role === "consumer"
                                            ? "bg-primary text-white"
                                            : "bg-white text-primary"
                                    }`}
                                    type="button"
                                    variant="light"
                                    onClick={handleSelectConsumer}
                                >
                                    CONSUMER
                                </Button>
                                <Button
                                    className={`px-0 py-0 min-height-content agentConsumer px-1 text-primary ${
                                        role === "agent"
                                            ? "bg-primary text-white"
                                            : "bg-white text-primary"
                                    }`}
                                    variant="light"
                                    onClick={handleSelectAgent}
                                >
                                    AGENT
                                </Button>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="d-flex mx-lg-3 align-items-center">
                                    <Link
                                        to="/listing-tasks"
                                        className="text-decoration-none"
                                    >
                                        {/* <span
                                    className={`px-1 ${role === "agent"
                                        ? "text-white"
                                        : "text-primary"
                                        }`}
                                >
                                    Sign in
                                </span> */}
                                        <Nav.Link
                                            className={`px-1 agentlinks ${
                                                role === "agent"
                                                    ? "text-white"
                                                    : "text-primary"
                                            }`}
                                        >
                                            SIGN IN
                                        </Nav.Link>
                                    </Link>
                                    {/* <span
                                className={`${role === "agent"
                                    ? "text-white"
                                    : "text-primary"
                                    }`}
                            >
                                /
                            </span> */}
                                    <span
                                        className={` agentlinks ${
                                            role === "agent"
                                                ? "text-white"
                                                : "text-primary"
                                        }`}
                                    >
                                        /
                                    </span>
                                    <Link
                                        to="/listing-tasks"
                                        className="text-decoration-none"
                                    >
                                        {/* <span
                                    className={`px-1 ${role === "agent"
                                        ? "text-white"
                                        : "text-primary"
                                        }`}
                                >
                                    Register
                                </span> */}
                                        <Nav.Link
                                            className={`px-1 agentlinks ${
                                                role === "agent"
                                                    ? "text-white"
                                                    : "text-primary"
                                            }`}
                                        >
                                            REGISTER
                                        </Nav.Link>
                                    </Link>
                                </div>
                                <Link to="/">
                                    <img
                                        src="/assets/Group 138.png"
                                        className={`${
                                            role === "agent"
                                                ? "text-white"
                                                : "text-primary"
                                        } my-auto icon px-2`}
                                        width="37px"
                                    />
                                </Link>
                                <Link to="/">
                                    {/* <img
=======
                                } my-auto icon px-2`}
                                width="37px"
                            />
                        </Link>
                        <Link to="/locations">
                            <img
                                src="/assets/location-ico.png"
                                className={`${role === "agent"
                                        ? "text-white"
                                        : "text-primary"
                                    } my-auto icon px-2`}
                                width="39px"
                            /> */}
                                    <p
                                        className={`agentlinks ${
                                            role === "agent"
                                                ? "text-white"
                                                : "text-primary"
                                        } icon my-auto`}
                                    >
                                        <VscLocation size="32" />
                                    </p>
                                </Link>
                                <Link to="/">
                                    {/* <img
                                src="/assets/us-flag.png"
                                className={`${role === "agent"
                                        ? "text-white"
                                        : "text-primary"
                                    } my-auto icon px-2`}
                                width="39px"
                            /> */}
                                    <p
                                        className={` agentlinks ${
                                            role === "agent"
                                                ? "text-white"
                                                : "text-primary"
                                        } my-auto icon px-2`}
                                    >
                                        <GiUsaFlag size="24" />
                                    </p>
                                </Link>
                                <Link to="/">
                                    {/* <img
                                src="/assets/Group 25.png"
                                className={`${role === "agent"
                                        ? "text-white"
                                        : "text-primary"
                                    } my-auto icon px-2`}
                                width="40px"
                            /> */}
                                    <p
                                        className={`agentlinks ${
                                            role === "agent"
                                                ? "text-white"
                                                : "text-primary"
                                        } my-auto icon px-2`}
                                    >
                                        <BiSearchAlt size="30" />
                                    </p>
                                </Link>
                            </div>
                        </Container>
                    </div>
                    <div
                        className={`d-none d-lg-flex  py-2 align-items-center  ${
                            role === "agent" ? "bg-primary" : "bg-white"
                        }`}
                    >
                        <Container className="d-flex justify-content-center mx-10  ">
                            <div className="d-flex">
                                <Link
                                    to={`/${role}/about`}
                                    className="text-decoration-none my-auto"
                                >
                                    <Nav.Link
                                        className={`fs-5  d-flex align-items-center text-decoration-none my-auto ${
                                            role === "agent"
                                                ? "text-light"
                                                : "text-primary"
                                        }`}
                                        href={!!role ? `/${role}/about` : ""}
                                    >
                                        LOCATIONS
                                    </Nav.Link>
                                </Link>
                                <Link
                                    to="/tru-u"
                                    className="text-decoration-none my-auto"
                                >
                                    <Nav.Link
                                        className={`fs-5  d-flex align-items-center  mx-3 ${
                                            role === "agent"
                                                ? "text-light"
                                                : "text-primary"
                                        }`}
                                        href="/tru-u"
                                    >
                                        CULTURE
                                    </Nav.Link>
                                </Link>
                                <Link
                                    to="/tech"
                                    className="text-decoration-none my-auto"
                                >
                                    <Nav.Link
                                        className={`fs-5  d-flex align-items-center ${
                                            role === "agent"
                                                ? "text-light"
                                                : "text-primary"
                                        }`}
                                        href="/tech"
                                    >
                                        UNIVERSITY
                                    </Nav.Link>
                                </Link>
                            </div>
                            <div className="mx-3 px-5">
                                <Link to="/">
                                    <img
                                        src={`${
                                            role === "agent"
                                                ? "/assets/logo-white.png"
                                                : "/assets/logo.png"
                                        }`}
                                        alt=""
                                        height="67px"
                                        width="267px"
                                    />
                                </Link>
                            </div>
                            <div className="d-flex">
                                <Link
                                    to="/homes"
                                    className="text-decoration-none my-auto"
                                >
                                    <Nav.Link
                                        className={`fs-5  d-flex align-items-center ${
                                            role === "agent"
                                                ? "text-light"
                                                : "text-primary"
                                        }`}
                                        href="/homes"
                                    >
                                        TECH
                                    </Nav.Link>
                                </Link>
                                <div
                                    // to="/agent/about"
                                    className="text-decoration-none my-auto"
                                >
                                    <Link
                                        className={`fs-5 d-flex align-items-center mx-3 ${
                                            role === "agent"
                                                ? "text-light"
                                                : "text-primary"
                                        }`}
                                        to="/agent/about"
                                    >
                                        ABOUT
                                    </Link>
                                </div>
                                <Link
                                    to="/invest"
                                    className="text-decoration-none my-auto"
                                >
                                    <Nav.Link
                                        className={`fs-5 d-flex align-items-center ${
                                            role === "agent"
                                                ? "text-light"
                                                : "text-primary"
                                        }`}
                                        href="/invest"
                                    >
                                        CONTACT
                                    </Nav.Link>
                                </Link>
                            </div>
                        </Container>
                    </div>
                </div>
                {/*============ responsive navbar ==========*/}
                <div
                    className={`d-lg-none d-sm-flex py-3 ${
                        role === "agent" ? "" : "bg-white"
                    }`}
                >
                    <Container className="d-flex justify-content-between">
                        <img
                            src={`${
                                role === "agent"
                                    ? "/assets/logo.png"
                                    : "/assets/logo.png"
                            }`}
                            alt="logo"
                            width="160px"
                        />
                        <Button
                            onClick={() => setIsOpen(!isOpen)}
                            className={
                                role === "agent"
                                    ? "text-primary bg-light"
                                    : "bg-white"
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
                                            role === "consumer"
                                                ? "text-primary"
                                                : "text-light"
                                        } d-flex align-items-center`}
                                        href="/about"
                                    >
                                        About
                                    </Nav.Link>
                                </Link>
                                <Link
                                    to="/tru-u"
                                    className="text-decoration-none"
                                >
                                    <Nav.Link
                                        className={`fs-5 ${
                                            role === "consumer"
                                                ? "text-primary"
                                                : "text-light"
                                        } d-flex align-items-center`}
                                        href="/tru-u"
                                    >
                                        Tru U
                                    </Nav.Link>
                                </Link>
                                <Link to="/tech">
                                    <Nav.Link
                                        className={`fs-5 ${
                                            role === "consumer"
                                                ? "text-primary"
                                                : "text-light"
                                        } d-flex align-items-center`}
                                        href="/tech"
                                    >
                                        Tech
                                    </Nav.Link>
                                </Link>
                                <Link
                                    to="/homes"
                                    className="text-decoration-none"
                                >
                                    <Nav.Link
                                        className={`fs-5 ${
                                            role === "consumer"
                                                ? "text-primary"
                                                : "text-light"
                                        } d-flex align-items-center`}
                                        href="/homes"
                                    >
                                        Homes
                                    </Nav.Link>
                                </Link>
                                <Link
                                    to="/join"
                                    className="text-decoration-none"
                                >
                                    <Nav.Link
                                        className={`fs-5 ${
                                            role === "consumer"
                                                ? "text-primary"
                                                : "text-light"
                                        } d-flex align-items-center`}
                                        href="/join"
                                    >
                                        Join
                                    </Nav.Link>
                                </Link>
                                <Link
                                    to="/invest"
                                    className="text-decoration-none"
                                >
                                    <Nav.Link
                                        className={`fs-5 ${
                                            role === "consumer"
                                                ? "text-primary"
                                                : "text-light"
                                        } d-flex align-items-center`}
                                        href="/invest"
                                    >
                                        Invest
                                    </Nav.Link>
                                </Link>
                                <div
                                    className={`d-lg-flex  py-0 align-items-center  ${
                                        role === "agent"
                                            ? "bg-white"
                                            : "bg-[#0f0e4d]"
                                    }`}
                                >
                                    <Container className=" justify-content-between my-3  py-1">
                                        <div className="d-flex justify-content-lg-between align-items-center gap-2">
                                            <div className="d-flex mx-lg-3 align-items-center">
                                                <Link
                                                    to="/"
                                                    className="text-decoration-none"
                                                >
                                                    <Nav.Link
                                                        className={`px-1 ${
                                                            role === "agent"
                                                                ? "text-white"
                                                                : "text-white"
                                                        }`}
                                                    >
                                                        INVEST
                                                    </Nav.Link>
                                                </Link>

                                                <Link
                                                    to="/"
                                                    className="text-decoration-none"
                                                >
                                                    <Nav.Link
                                                        className={`px-1 ${
                                                            role === "agent"
                                                                ? "text-white"
                                                                : "text-white"
                                                        }`}
                                                    >
                                                        JOIN
                                                    </Nav.Link>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-lg-between align-items-center gap-2">
                                            <Button
                                                className={`mr-1 px-0 py-0 min-height-content agentConsumers px-1  ${
                                                    role === "consumer"
                                                        ? "bg-primary text-white"
                                                        : "bg-white text-primary"
                                                }`}
                                                type="button"
                                                variant="light"
                                                onClick={handleSelectConsumer}
                                            >
                                                CONSUMER
                                            </Button>
                                            <Button
                                                className={`px-0 py-0 min-height-content agentConsumer px-1 text-primary ${
                                                    role === "agent"
                                                        ? "bg-primary text-white"
                                                        : "bg-white text-white"
                                                }`}
                                                variant="light"
                                                onClick={handleSelectAgent}
                                            >
                                                AGENT
                                            </Button>
                                        </div>
                                        <div className="d-block align-items-center">
                                            <div className="d-flex mx-lg-3 align-items-center">
                                                <Link
                                                    to="/listing-tasks"
                                                    className="text-decoration-none"
                                                >
                                                    {/* <span
                                    className={`px-1 ${role === "agent"
                                        ? "text-white"
                                        : "text-primary"
                                        }`}
                                >
                                    Sign in
                                </span> */}
                                                    <Nav.Link
                                                        className={`px-1 agentlinks ${
                                                            role === "agent"
                                                                ? "text-white"
                                                                : "text-primary"
                                                        }`}
                                                    >
                                                        SIGN IN
                                                    </Nav.Link>
                                                </Link>
                                                {/* <span
                                className={`${role === "agent"
                                    ? "text-white"
                                    : "text-primary"
                                    }`}
                            >
                                /
                            </span> */}
                                                <span
                                                    className={` agentlinks ${
                                                        role === "agent"
                                                            ? "text-white"
                                                            : "text-white"
                                                    }`}
                                                >
                                                    /
                                                </span>

                                                <Link
                                                    to="/listing-tasks"
                                                    className="text-decoration-none"
                                                >
                                                    <Nav.Link
                                                        className={`px-1 agentlinks ${
                                                            role === "agent"
                                                                ? "text-white"
                                                                : "text-white"
                                                        }`}
                                                    >
                                                        REGISTER
                                                    </Nav.Link>
                                                </Link>
                                            </div>
                                            <div className="d-flex">
                                                <Link to="/">
                                                    <img
                                                        src="/assets/Group 138.png"
                                                        className={`${
                                                            role === "agent"
                                                                ? "text-white"
                                                                : "text-primary"
                                                        } my-auto icon px-2`}
                                                        width="37px"
                                                    />
                                                </Link>
                                                <Link to="/">
                                                    <p
                                                        className={`agentlinks ${
                                                            role === "agent"
                                                                ? "text-white"
                                                                : "text-primary"
                                                        } icon my-auto`}
                                                    >
                                                        <VscLocation size="32" />
                                                    </p>
                                                </Link>
                                                <Link to="/">
                                                    <p
                                                        className={` agentlinks ${
                                                            role === "agent"
                                                                ? "text-white"
                                                                : "text-primary"
                                                        } my-auto icon px-2`}
                                                    >
                                                        <GiUsaFlag size="24" />
                                                    </p>
                                                </Link>
                                                <Link to="/">
                                                    <p
                                                        className={`agentlinks ${
                                                            role === "agent"
                                                                ? "text-white"
                                                                : "text-primary"
                                                        } my-auto icon px-2`}
                                                    >
                                                        <BiSearchAlt size="30" />
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>
                                    </Container>
                                </div>
                            </Container>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navigation;
