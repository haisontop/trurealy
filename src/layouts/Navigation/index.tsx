import { Link, useLocation, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BsMic } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";
import { GiUsaFlag } from "react-icons/gi";
import { AiOutlineAlignRight, AiFillCaretRight } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { BiSearchAlt, BiSearchAlt2 } from "react-icons/bi";
import {
    Button,
    Container,
    FormControl,
    InputGroup,
    Nav,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useScript from "../../hooks/useScript";
import { AGENT_BOT, CONSUMER_BOT } from "../../constants";
import {
    DotsCircleSvg,
    FlagSvg,
    PositionSvg,
    SearchSvg,
} from "../../components/Icons";
import { FaSearch } from "react-icons/fa";

interface NavItemModel {
    label: string;
    path: string;
}

interface NavModel extends NavItemModel {
    secondary?: NavItemModel[];
}

const CONSUMER_LEFT_NAV_ITEMS: NavModel[] = [
    {
        label: "BUY",
        path: "/consumer/buy",
    },
    {
        label: "SELL",
        path: "/consumer/sell",
    },
    {
        label: "RENT",
        path: "/consumer/rent",
    },
];

const CONSUMER_RIGHT_NAV_ITEMS: NavModel[] = [
    {
        label: "AGENTS",
        path: "/agent/home",
        secondary: [
            {
                label: "Directory",
                path: "/consumer/agentdirectory",
            },
            {
                label: "Locations",
                path: "/consumer/locations",
            },
        ],
    },
    {
        label: "ABOUT",
        path: "/consumer/about",
        secondary: [
            {
                label: "Testimonials",
                path: "/consumer/testimonial",
            },
            {
                label: "Culture",
                path: "/consumer/culture",
            },
            {
                label: "Leadership",
                path: "/consumer/leadership",
            },
            {
                label: "Giving Back",
                path: "/consumer/givingback",
            },
            {
                label: "About",
                path: "/consumer/about",
            },
        ],
    },
    {
        label: "CONTACT",
        path: "/consumer/contact",
    },
];

const AGENT_LEFT_NAV_ITEMS: NavModel[] = [
    {
        label: "LOCATIONS",
        path: "/locations",
    },
    {
        label: "CULTURE",
        path: "/agent/culture",
    },
    {
        label: "UNIVERSITY",
        path: "/universal",
    },
];

const AGENT_RIGHT_NAV_ITEMS: NavModel[] = [
    {
        label: "TECH",
        path: "/universal/tech",
    },
    {
        label: "ABOUT",
        path: "/agent/about",
    },
    {
        label: "CONTACT",
        path: "/consumer/contact",
    },
];

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
    const [secondaryNavs, setSecondaryNavs] = useState<
        NavItemModel[] | undefined
    >([]);

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
                            role === "agent" ? "bg-dark-primary" : "bg-white"
                        }`}
                    >
                        <Container className="d-md-flex justify-content-between my-3  py-1">
                            <div className="d-flex justify-content-lg-between align-items-center gap-2">
                                <div className="d-flex mx-lg-3 align-items-center">
                                    <Link
                                        to="/invest"
                                        className="text-decoration-none"
                                    >
                                        <Nav.Link
                                            className={`px-1 ${
                                                role === "agent"
                                                    ? "text-light-primary"
                                                    : "text-semi-light-primary"
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
                                                    ? "text-light-primary"
                                                    : "text-semi-light-primary"
                                            }`}
                                        >
                                            JOIN
                                        </Nav.Link>
                                    </Link>
                                    <Link
                                        to="/commercial"
                                        className="text-decoration-none"
                                    >
                                        <Nav.Link
                                            className={`px-1 ${
                                                role === "agent"
                                                    ? "text-light-primary"
                                                    : "text-semi-light-primary"
                                            }`}
                                            href="/commercial"
                                        >
                                            COMMERCIAL
                                        </Nav.Link>
                                    </Link>
                                </div>
                            </div>
                            <div className="d-flex justify-content-lg-between align-items-center gap-2">
                                <Button
                                    className={`mr-1 py-1 min-height-content agentConsumers px-2 rounded-pill ${
                                        role === "consumer"
                                            ? "bg-semi-primary text-white"
                                            : "text-semi-light-primary"
                                    }`}
                                    type="button"
                                    variant="light"
                                    onClick={handleSelectConsumer}
                                >
                                    CONSUMER
                                </Button>
                                <Button
                                    className={`py-1 min-height-content agentConsumer px-2 rounded-pill ${
                                        role === "agent"
                                            ? "bg-light-primary text-white"
                                            : "bg-white text-semi-light-primary"
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
                                        <Nav.Link
                                            className={`px-1 agentlinks ${
                                                role === "agent"
                                                    ? "text-light-primary"
                                                    : "text-semi-light-primary"
                                            }`}
                                        >
                                            SIGN IN
                                        </Nav.Link>
                                    </Link>

                                    <span
                                        className={` agentlinks ${
                                            role === "agent"
                                                ? "text-light-primary"
                                                : "text-semi-light-primary"
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
                                                    ? "text-light-primary"
                                                    : "text-semi-light-primary"
                                            }`}
                                        >
                                            REGISTER
                                        </Nav.Link>
                                    </Link>
                                </div>
                                <div className="d-flex gap-3 align-items-center">
                                    <Link to="/">
                                        <div
                                            className={`${
                                                role === "agent"
                                                    ? "text-light-primary"
                                                    : "text-semi-light-primary"
                                            }`}
                                        >
                                            <DotsCircleSvg
                                                width="27px"
                                                height="27px"
                                            />
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div
                                            className={`${
                                                role === "agent"
                                                    ? "text-light-primary"
                                                    : "text-semi-light-primary"
                                            }`}
                                        >
                                            <PositionSvg
                                                width="27px"
                                                height="27px"
                                            />
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div
                                            className={`rounded-circle overflow-hidden ${
                                                role === "agent"
                                                    ? "text-light-primary"
                                                    : "text-semi-light-primary"
                                            }`}
                                        >
                                            <FlagSvg
                                                width="24px"
                                                height="24px"
                                                size="24"
                                            />
                                        </div>
                                    </Link>
                                    <Link to="/">
                                        <div
                                            className={` ${
                                                role === "agent"
                                                    ? "text-light-primary"
                                                    : "text-semi-light-primary"
                                            }`}
                                        >
                                            <FaSearch size="27" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div
                        className={`d-none d-lg-flex  py-1 align-items-center  ${
                            role === "agent" ? "bg-white" : "bg-primary"
                        }
                        }`}
                    >
                        <Container className="d-flex justify-content-center mx-10  ">
                            <div className="d-flex">
                                {(role === "agent"
                                    ? AGENT_LEFT_NAV_ITEMS
                                    : CONSUMER_LEFT_NAV_ITEMS
                                ).map((nav) => {
                                    if (
                                        nav.secondary &&
                                        nav.secondary.length > 0
                                    ) {
                                        return (
                                            <div
                                                className="text-decoration-none my-auto"
                                                onMouseEnter={() =>
                                                    setSecondaryNavs(
                                                        nav.secondary
                                                    )
                                                }
                                            >
                                                <div
                                                    className={`fs-5  d-flex align-items-center text-decoration-none my-auto px-3 ${
                                                        role === "agent"
                                                            ? "text-primary"
                                                            : "text-light"
                                                    }`}
                                                >
                                                    {nav.label}
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <Link
                                                to={nav.path}
                                                className="text-decoration-none my-auto"
                                            >
                                                <Nav.Link
                                                    className={`fs-5  d-flex align-items-center text-decoration-none my-auto ${
                                                        role === "agent"
                                                            ? "text-primary"
                                                            : "text-light"
                                                    }`}
                                                    href={nav.path}
                                                >
                                                    {nav.label}
                                                </Nav.Link>
                                            </Link>
                                        );
                                    }
                                })}
                            </div>
                            <div className="px-5">
                                <Link to="/">
                                    <img
                                        src={`${
                                            role === "agent"
                                                ? "/assets/images/logo-dark.png"
                                                : "/assets/images/logo-light.png"
                                        }`}
                                        alt=""
                                        height="105px"
                                        width="124px"
                                    />
                                </Link>
                            </div>
                            <div className="d-flex">
                                {(role === "agent"
                                    ? AGENT_RIGHT_NAV_ITEMS
                                    : CONSUMER_RIGHT_NAV_ITEMS
                                ).map((nav) => {
                                    if (
                                        nav.secondary &&
                                        nav.secondary.length > 0
                                    ) {
                                        return (
                                            <div
                                                className="text-decoration-none my-auto"
                                                onMouseEnter={() =>
                                                    setSecondaryNavs(
                                                        nav.secondary
                                                    )
                                                }
                                            >
                                                <div
                                                    className={`fs-5 d-flex align-items-center text-decoration-none my-auto px-3 ${
                                                        role === "agent"
                                                            ? "text-primary"
                                                            : "text-light"
                                                    }`}
                                                >
                                                    {nav.label}
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <Link
                                                to={nav.path}
                                                className="text-decoration-none my-auto"
                                            >
                                                <Nav.Link
                                                    className={`fs-5  d-flex align-items-center text-decoration-none my-auto ${
                                                        role === "agent"
                                                            ? "text-primary"
                                                            : "text-light"
                                                    }`}
                                                    href={nav.path}
                                                >
                                                    {nav.label}
                                                </Nav.Link>
                                            </Link>
                                        );
                                    }
                                })}
                            </div>
                        </Container>
                    </div>
                    {/* Secondary navs */}
                    <div
                        className={`d-none d-lg-flex  py-1 align-items-center  ${
                            role === "agent" ? "bg-primary" : "bg-white"
                        }
                        }`}
                    >
                        <Container className="d-flex justify-content-center mx-10  ">
                            <div className="d-flex">
                                {secondaryNavs?.map((nav) => {
                                    return (
                                        <Link
                                            to={nav.path}
                                            className="text-decoration-none my-auto"
                                        >
                                            <Nav.Link
                                                className={`fs-5  d-flex align-items-center text-decoration-none my-auto ${
                                                    role === "agent"
                                                        ? "text-light"
                                                        : "text-primary"
                                                }`}
                                                href={nav.path}
                                            >
                                                {nav.label}
                                            </Nav.Link>
                                        </Link>
                                    );
                                })}
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
