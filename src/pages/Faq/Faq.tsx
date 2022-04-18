import React, { useState } from "react";
import { TrueHelp } from "../../components/TruHelp";
import { FAQ_DATA } from "../../constants/FAQ_MOCK_DATA";
import Layout from "../../layouts/Layout";
import Faqcard from "./FaqCard";
import style from "./Faq.module.scss";

const Faq = () => {
    return (
        <div className={`${style["faq-container"]}`}>
            <Layout>
                <div className="position-relative pt-4">
                    <img
                        src="/assets/question-marks.png"
                        alt="gradient-question"
                        className={`position-absolute left-0 ${style["faq-question-mark"]}`}
                    ></img>

                    <div className="container mx-auto ">
                        <div className="text-center fw-light mb-5 pt-3 px-5">
                            <h1
                                className="fw-bold text-primary"
                            >
                                FREQUENTLY ASKED QUESTIONS
                            </h1>
                        </div>
                        <div className={style['faq']}>
                             <div className={`bg-primary text-white ${style["faq-box"]}`}>
                                 <div className="p-4">
                                     {FAQ_DATA.map((faq) => (
                                         <Faqcard
                                             title={faq.tittle}
                                             discription={faq.discription}
                                         />
                                     ))}
                                 </div>
                             </div>
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
