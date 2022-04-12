import React from "react";
import TestimonialBanner from "./components/TestimonialBanner";
import TestimonialMiddle from "./components/TestimonialMiddle";
import Layout from "../../layouts/Layout";
import { TrueHelp } from "../../components/TruHelp";

const TestimonialConsumer = () => {
  return (
    <Layout>
      <div className="container mx-auto px-0">
        <TestimonialBanner />

        <TestimonialMiddle />

        <TrueHelp title="TRU Agents Here To Help">
          <>
            <button className="py-1 text-white px-5 fs-4 me-4 tru-help-btn">
              Find An Agent
            </button>
            <button className="py-1 text-white px-4 fs-4 tru-help-btn">
              Find a New Home
            </button>
          </>
        </TrueHelp>
      </div>
    </Layout>
  );
};

export default TestimonialConsumer;
