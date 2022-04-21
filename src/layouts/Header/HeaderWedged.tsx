import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./HeaderWedged.scss";

function HeaderWedged() {
    const [MobMenuToggol, setMobMenuToggol] = useState(false);
    const [colorChangeModeText, setcolorChangeModeText] = useState("LIGHT");
    const colorChangeMode = () => {
        let element = document.body;
        element.classList.contains("darkMode");
        if (element.classList.contains("darkMode") === false) {
            element.classList.remove("lightMode");
            element.classList.add("darkMode");
            setcolorChangeModeText("DARK");
        } else {
            element.classList.remove("darkMode");
            element.classList.add("lightMode");
            setcolorChangeModeText("LIGHT");
        }
    };
    return (
        <div className="AfterLoginHeader">
            <div className="ColorMode" onClick={() => colorChangeMode()}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43.055"
                    height="12.416"
                    viewBox="0 0 43.055 12.416"
                >
                    <g
                        id="Group_114"
                        data-name="Group 114"
                        transform="translate(-31.5 -27.21)"
                    >
                        <path
                            id="Path_159"
                            data-name="Path 159"
                            d="M-22993.75-11957l30-7.75,12.5,4"
                            transform="translate(23025.5 11993)"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        />
                        <path
                            id="Polygon_12"
                            data-name="Polygon 12"
                            d="M3.337,0,6.674,3.337,3.337,6.674,0,3.337Z"
                            transform="translate(61.563 30.188) rotate(45)"
                            fill="currentColor"
                        />
                    </g>
                </svg>

                <span className="ps-2">{colorChangeModeText}</span>
            </div>
            <header>
                <div className="layerTwo  ">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <ul className="list-unstyled">
                                    <li>
                                        <NavLink to={"/"}>
                                            CRM <i>6</i>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/tru-U"}>
                                            MARKETING
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to={"/"}>
                                            <img
                                                src="/img/logoDark.svg"
                                                alt="Logo"
                                            />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/"}>
                                            TRAINING
                                            <i>4</i>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/"}>SUPPORT</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="layerThree bg-primary">
                    <div className="partOne">
                        <div className="container-fluid">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-auto">
                                    <NavLink to={"/"}>
                                        <img src="/img/logo-w.svg" alt="Logo" />
                                    </NavLink>
                                </div>
                                <div className="col-auto">
                                    <button
                                        className="btn"
                                        onClick={() => {
                                            setMobMenuToggol(!MobMenuToggol);
                                        }}
                                    >
                                        <span className="material-icons">
                                            menu
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`mobNav d-flex flex-column ${
                            MobMenuToggol === true && "active"
                        }`}
                    >
                        <div className="d-flex justify-content-between   lineOne">
                            <div className="col-auto">
                                <NavLink to={"/"}>
                                    <img src="/img/logo-w.svg" alt="Logo" />
                                </NavLink>
                            </div>
                            <div className="col-auto">
                                <button
                                    className="btn"
                                    onClick={() => {
                                        setMobMenuToggol(!MobMenuToggol);
                                    }}
                                >
                                    <span className="material-icons">
                                        close
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="h-100 overflow-auto">
                            <ul className="list-unstyled">
                                <li>
                                    <NavLink to={"/homes"}>
                                        <img src="" alt="" />
                                        Homes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/about"}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/tru-U"}>Tru U</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/tech"}>Tech</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/join"}>
                                        <img src="" alt="" />
                                        Join
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/invest"}>
                                        <img src="" alt="" />
                                        Invest
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <div
                className={`mobMenuCloseSkinBackdrop d-lg-none ${
                    MobMenuToggol === true && "active"
                }`}
                onClick={() => {
                    setMobMenuToggol(!MobMenuToggol);
                }}
            ></div>
        </div>
    );
}

export default HeaderWedged;
