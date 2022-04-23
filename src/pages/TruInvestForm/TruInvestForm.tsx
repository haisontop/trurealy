import React from "react";
import Layout from "../../layouts/Layout";
import "./TruInvestForm.scss";
import fb from "./icons/Group 350.png";
import insta from "./icons/Group 351.png";
import yt from "./icons/Group 352.png";
import linkedin from "./icons/Group 353.png";

export default function TruInvestForm() {
    return (
        <div>
            <Layout>
                <div className="investForm">
                    <div className="row p-5">
                        <div className="col-12 col-md-6 info">
                            <div className="h1">
                                INVESTMENT <br /> INQUIRIES
                            </div>
                            <div className="contact my-4">
                                <p>
                                    Phone <br />
                                    555.555.555
                                </p>
                                <p>
                                    Email <br />
                                    info@trureality.com
                                </p>
                                <p>
                                    Corporate Headquarters <br />
                                    7373 N. Scottsdale Rd A100 <br />
                                    Scottsdale, AZ 85253
                                </p>
                            </div>
                            <div className="d-flex icons">
                                <div className="p-1">
                                    <img src={fb} alt="" />
                                </div>
                                <div className="p-1">
                                    <img src={insta} alt="" />
                                </div>
                                <div className="p-1">
                                    <img src={yt} alt="" />
                                </div>
                                <div className="p-1">
                                    <img src={linkedin} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6  p-1 px-md-5">
                            <div className="gradBox">
                                <div className="innerGradBox p-4">
                                    <div className="inputBoxes">
                                        <label htmlFor="name">Name</label>
                                        <br />
                                        <input
                                            type="text"
                                            className="mb-3 p-1"
                                            id="name"
                                        />
                                        <br />
                                        <label htmlFor="email">Email</label>
                                        <br />
                                        <input
                                            type="email"
                                            className="mb-3 p-1"
                                            id="email"
                                        />
                                        <br />
                                        <label htmlFor="phone">Phone</label>
                                        <br />
                                        <input
                                            type="text"
                                            className="mb-3 p-1"
                                            id="phone"
                                        />
                                        <br />
                                        <label htmlFor="msg">
                                            Your Message
                                        </label>
                                        <br />
                                        <textarea
                                            placeholder="I am intrested in your company "
                                            name=""
                                            id="msg"
                                            rows={4}
                                            className="mb-3 p-1"
                                        ></textarea>
                                        <br />
                                        <div className="text-center">
                                            <button
                                                className="bg-pink  text-white border-0 px-5 py-2"
                                                style={{ borderRadius: "10px" }}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
