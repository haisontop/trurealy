import React, { useState } from "react";
import { TrueHelp } from "../../components/TruHelp";
import { FAQ_DATA } from "../../constants/FAQ_MOCK_DATA";
import Layout from "../../layouts/Layout";
import Faqcard from "./FaqCard";

const Faq = () => {
    return (
        <div>
            <Layout>
                <div className="position-relative">
                    <img
                        src="/assets/gradient-arc-with-question.png"
                        alt="gradient-question"
                        className="position-absolute left-0 faq-question-mark"
                    ></img>

                    <div className="container mx-auto ">
                        <div className="text-center fw-light my-5 px-5">
                            <h1
                                className="fw-normal"
                                style={{ fontSize: "50px" }}
                            >
                                HERE FOR HELP? HERE TO ANSWER.
                            </h1>
                            <hr
                                className="mx-auto"
                                style={{ height: "3px", width: "86%" }}
                            />
                        </div>
                        <div className="pb-5 position-relative">
                            <div className="px-5">
                                {FAQ_DATA.map((faq) => (
                                    <Faqcard
                                        title={faq.tittle}
                                        discription={faq.discription}
                                    />
                                ))}
                            </div>

                            <img
                                src="/assets/gradient-arc.png"
                                alt="gradient-bottom"
                                className="position-absolute faq-bottom-right-arc"
                            ></img>
                        </div>
                    </div>
                    <TrueHelp title="Still Have A Few Questions?">
                        <>
                            <button className="py-1 text-white px-5 fs-4 me-4 tru-help-btn">
                                Contact Us Todsy
                            </button>
                        </>
                    </TrueHelp>
                </div>
            </Layout>
        </div>
    );
};

export default Faq;
