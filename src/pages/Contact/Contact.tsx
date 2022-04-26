import React from "react";
import Layout from "../../layouts/Layout";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";
import style from "./Contect.module.scss";

export default function Contact() {
    return (
        <Layout>
            <div
                className={`container-fluid mt-md-5 mt-0 mb-5 pt-md-5 position-relative ${style["contact"]}`}
            >
                <div className="row gy-4 px-1 px-md-5">
                    <div className="col-lg-6 px-md-0 text-primary">
                        <div>
                            <h1 className="fw-bold display-2 display-md-1 fw-bold">
                                GET IN TOUCH
                            </h1>
                            <h5 className="fw-bold mt-1 fs-2 fs-md-1 ">
                                WE'D LOVE TO HEAR FROM YOU.
                            </h5>
                        </div>
                        <div className={`${style["phone-address"]}`}>
                            <div>
                                <h5 className="fw-medium">Phone</h5>
                                <p className="mt-2">555.555.5555</p>
                            </div>
                            <div className="mt-5">
                                <h5 className="fw-medium">Email</h5>
                                <p className="mt-2">Info@trurealty.com</p>
                            </div>
                            <div className="mt-5">
                                {" "}
                                <h5 className="fw-medium">
                                    Corporate Headquarters
                                </h5>
                                <p className="my-2">
                                    7373 N. Scottsdale Rd A100
                                </p>
                                <p className="my-0">Scottsdale, AZ 85253</p>
                            </div>
                        </div>
                        <div className="d-flex mt-5">
                            <FaFacebookF
                                size="40"
                                className={`p-2 rounded rounded-circle text-primary me-md-5 me-2 ${style["icon"]}`}
                                style={{
                                    border: "1px solid #292670",
                                    cursor: "pointer",
                                }}
                            />
                            <FaInstagram
                                size="40"
                                className={`p-2 rounded rounded-circle text-primary mx-md-4 mx-2 ${style["icon"]}`}
                            />
                            <FaYoutube
                                size="40"
                                className={`p-2 rounded rounded-circle text-primary mx-md-4 mx-2 ${style["icon"]}`}
                            />
                            <FaLinkedinIn
                                size="40"
                                className={`p-2 rounded rounded-circle text-primary mx-md-4 mx-2 ${style["icon"]}`}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`${style["contact-box"]}`}>
                            <form
                                className={`bg-primary text-white p-4 p-md-5 ${style["contact-from"]}`}
                            >
                                <div className="w-100">
                                    <span className="fs-2">
                                        Name<sup className="text-danger">*</sup>
                                    </span>
                                    <br />
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-100 px-2 py-2 bg-primary text-white mt-1 fs-2"
                                    />
                                </div>
                                <div className={`${style["input-div"]}`}>
                                    <span className="fs-2">
                                        Contact
                                        <sup className="text-danger">*</sup>
                                    </span>
                                    <br />
                                    <input
                                        type="text"
                                        name="number"
                                        className="w-100 px-2 py-2 bg-primary text-white mt-1 fs-2"
                                    />
                                </div>
                                <div className={`${style["input-div"]}`}>
                                    <span className="fs-2">
                                        Email
                                        <sup className="text-danger">*</sup>
                                    </span>
                                    <br />
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-100 px-2 py-2 bg-primary text-white mt-1 fs-2"
                                    />
                                </div>
                                <div className={`${style["input-div"]}`}>
                                    <span className="fs-2">
                                        Your massage
                                        <sup className="text-danger">*</sup>
                                    </span>
                                    <br />
                                    <textarea
                                        name="massage"
                                        placeholder="I am interested in buying a house… "
                                        className="w-100 px-2 py-2 bg-primary text-white mt-1 fs-2"
                                    />
                                </div>
                                <div className="text-center">
                                    <button className="py-2 mt-4 fs-3 px-5 text-white bg-pink border-0">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
