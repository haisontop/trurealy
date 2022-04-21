import React from "react";
import Layout from "../../../layouts/Layout";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";
import style from "./Contect.module.scss";

export default function ContactUs() {
    return (
        <Layout>
            <div className={`pt-5 position-relative ` } style={{ backgroundColor: '#0f0e4d', height: '100%' }}>
            <div
                className={`container mx-auto row mt-5 pt-5 position-relative ${style["contact"]}`}
            >
                <div className="col-6">
                    <div>
                        <h1 className="fw-bold text-white">CONTACT US!</h1>
                        <p className="fs-5 text-white">WE'D LOVE TO HEAR FROM YOU.</p>
                    </div>
                    <div className="mt-5">
                        <h5 className="fw-normal text-white">Phone</h5>
                        <p className="my-0 text-white">555.555.5555</p>
                    </div>
                    <div className="mt-5">
                        <h5 className="fw-normal text-white">Email</h5>
                        <p className="my-0 text-white">Info@trurealty.com</p>
                    </div>
                    <div className="mt-5">
                        <h5 className="fw-normal text-white">Corporate Headquarters</h5>
                        <p className="my-0 text-white">7373 N. Scottsdale Rd A100</p>
                        <p className="my-0 text-white">Scottsdale, AZ 85253</p>
                    </div>
                    <div className="d-flex mt-5">
                        <FaFacebookF
                            size="40"
                            className={`p-2 rounded rounded-circle text-white me-4 ${style["icon"]}`}
                            style={{
                                border: "1px solid #ffffff",
                                cursor: "pointer",
                            }}
                        />
                        <FaInstagram
                            size="40"
                            className={`p-2 rounded rounded-circle text-white me-4 ${style["icon"]}`}
                            style={{
                                border: "1px solid #ffffff",
                                cursor: "pointer",
                            }}
                        />
                        <FaYoutube
                            size="40"
                            className={`p-2 rounded rounded-circle text-white me-4 ${style["icon"]}`}
                            style={{
                                border: "1px solid #ffffff",
                                cursor: "pointer",
                            }}
                        />
                        <FaLinkedinIn
                            size="40"
                            className={`p-2 rounded rounded-circle text-white me-4 ${style["icon"]}`}
                            style={{
                                border: "1px solid #ffffff",
                                cursor: "pointer",
                            }}
                        />
                    </div>
                </div>
                <div className="col-6">
                    <div className="contact-box position-absolute end-0">
                        <form
                            className="bg-white text-primary px-4 py-5"
                        >
                            <div className="w-100">
                                <span>
                                    Name<sup className="text-danger">*</sup>
                                </span>
                                <br />
                                <input
                                    type="text"
                                    name="name"
                                    className="w-100 px-2 py-2 bg-primary text-primary mt-1"
                                />
                            </div>
                            <div className="mt-4">
                                <span>
                                    Contact<sup className="text-danger">*</sup>
                                </span>
                                <br />
                                <input
                                    type="text"
                                    name="number"
                                    className="w-100 px-2 py-2 bg-primary text-primary mt-1"
                                />
                            </div>
                            <div className="mt-4">
                                <span>
                                    Email<sup className="text-danger">*</sup>
                                </span>
                                <br />
                                <input
                                    type="email"
                                    name="email"
                                    className="w-100 px-2 py-2 bg-primary text-primary mt-1"
                                />
                            </div>
                            <div className="mt-4">
                                <span>
                                    Your massage
                                    <sup className="text-danger">*</sup>
                                </span>
                                <br />
                                <textarea
                                    name="massage"
                                    className="w-100 px-2 py-2 bg-primary text-primary mt-1"
                                    placeholder="I am interested in buying a house…"
                                />
                            </div>
                            <div className="text-center">
                                <button className="py-2 mt-4 px-5 text-white bg-pink border-0 rounded">
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
