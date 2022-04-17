import React from "react";
import TestimonialBanner from "./components/TestimonialBanner";
import TestimonialMiddle from "./components/TestimonialMiddle";
import Layout from "../../layouts/Layout";
import { TrueHelp } from "../../components/TruHelp";
import style from "./Testimonial.module.scss"

const TestimonialConsumer = () => {
  return (
    <Layout>
      <div className="container mx-auto px-0">
        <TestimonialBanner />

        <TestimonialMiddle />

        <div className={`text-center text-white ${style["tst-btm-bnnr"]}`}>
           <h1 className="fw-normal" style={{fontSize: "75px"}}>PARTNER WITH SMARTER AGENTS</h1>
           <button className="bg-pink text-white px-5 py-2 fs-4 border-0 rounded rounded-4 mt-5">Find An Agent</button>
        </div>
      </div>
    </Layout>
  );
};

export default TestimonialConsumer;
