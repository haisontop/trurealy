import React, { useState } from "react";
import { TrueHelp } from "../../components/TruHelp";
import { FAQ_DATA } from "../../constants/FAQ_MOCK_DATA";
import Layout from "../../layouts/Layout";
import FaqCard from "./FaqCard";
import style from "./Faq.module.scss";

const AgentFaq = () => {
    return (
        <div className="">
            <Layout>
                <div className={`position-relative ${style["faq-agent"]}`}>
                    <img
                        src="/assets/question-marks.png"
                        alt="gradient-question"
                        className={`position-absolute left-0 ${style["faq-question-mark"]}`}
                    ></img>

                    <div className="container mx-auto ">
                        <div className="text-center fw-light py-4 py-md-5 px-4 px-md-5">
                            <h1 className="fw-bold text-white display-2 px-md-5 ms-lg-4">
                                FREQUENTLY ASKED QUESTIONS
                            </h1>
                        </div>
                        <div className={style["faq"]}>
                            <div
                                className={`bg-primary text-white ${style["faq-box"]}`}
                            >
                                <div className="p-4">
                                    {FAQ_DATA.map((faq) => (
                                        <FaqCard
                                            title={faq.tittle}
                                            discription={faq.discription}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default AgentFaq;
