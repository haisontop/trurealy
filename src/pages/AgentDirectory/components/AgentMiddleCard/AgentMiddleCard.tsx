import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import style from "./AgentMiddleCard.module.scss";
interface props {
    img: string;
    name: string;
    email: string;
    about: string;
    website: string;
}

function AgentMiddleCard({ img, name, about, email, website }: props) {
    const [click, setClick] = useState(false);
    return (
        <div className={` m-md-5 mx-2 mb-5 ${style["agent-middle-card"]}`}>
            <div onClick={() => setClick(false)}>
                <img src={img} className="img-fluid" width="100%" alt="" />
                <div className={`px-4 py-2 text-white ${style["card-lebel"]}`}>
                    <h4 className="fw-bold">{name}</h4>
                    <p className="my-1">555.555.5555</p>
                    <p>{email}</p>
                </div>
            </div>
            {click && (
                <div
                    className={`overflow-hidden top-0 bg-primary ${style["card-about"]}`}
                >
                    <div className="position-relative text-white">
                        <button
                            onClick={() => setClick(!click)}
                            className="position-absolute end-0 bg-primary border-0"
                        >
                            <img
                                src="/assets/cross.png"
                                className="img-fluid"
                                width="70px"
                                alt=""
                            />
                        </button>
                        <div className="row">
                            <div className="col-4">
                                <img
                                    src={img}
                                    className={`img-fluid ${style["agent-img"]}`}
                                    alt=""
                                />
                                <div className="px-3 py-3">
                                    <h3 className="fw-bold">{name}</h3>
                                    <p className="m-0">555555.55555</p>
                                    <p className="m-0">{email}</p>
                                    <p className="m-0">{website}</p>
                                    <div className="d-flex mt-3">
                                        <Link to="/">
                                            <FaFacebookF
                                                size="30px"
                                                className="text-white p-1 border border-white rounded-circle"
                                            />
                                        </Link>
                                        <Link to="/">
                                            <FaInstagram
                                                size="30px"
                                                className="text-white p-1 border border-white rounded-circle mx-3"
                                            />
                                        </Link>
                                        <Link to="/">
                                            <FaLinkedinIn
                                                size="30px"
                                                className="text-white p-1 border border-white rounded-circle"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8">
                                <p className="mt-5 pt-5 px-5">{about}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 text-white px-5">
                        <h1 className="text-center fw-normal text-white">
                            GET MORE INFO
                        </h1>
                        <form className="row mt-5">
                            <div className="col-7">
                                <label className="w-100">
                                    <span>Name</span> <br />
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-100 rounded rounded-4 border-0 px-2 py-3"
                                    />
                                </label>
                                <label className="w-100 mt-2">
                                    <span>
                                        Email{" "}
                                        <sup className="text-danger">*</sup>{" "}
                                    </span>{" "}
                                    <br />
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-100 rounded rounded-4 border-0 px-2 py-3"
                                    />
                                </label>
                                <label className="w-100 mt-2">
                                    <span>Phone</span> <br />
                                    <input
                                        type="text"
                                        name="Phone"
                                        className="w-100 rounded rounded-4 border-0 px-2 py-3"
                                    />
                                </label>
                            </div>
                            <div className="col-5">
                                <label className="w-100">
                                    <span>Message</span> <br />
                                    <textarea className="w-100 p-2" />
                                </label>
                            </div>
                        </form>
                        <div className="mt-4">
                            <p>
                                By continuing, you agree to our Terms of Use &
                                Privacy Policy and understand that you may be
                                contacted by real estate professionals and
                                lenders via manual/automated calls, texts, and
                                pre-recorded voice messages regarding your
                                inquiries. Please note that you do not have to
                                consent to these Terms of Use & Privacy Policy
                                in order to purchase a property, goods, or
                                services.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AgentMiddleCard;
