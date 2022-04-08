import React from "react";
import Truhelp from "../../components/shared/TruHelp";
import Testimonialcobanner from "../../components/testimonial/TestimonialCoBanner";
import ConsumerTestimonialMiddle from "../../components/testimonial/ConsumerTestimonialMiddle";
import Layout from "../../layouts/Layout";

const TestimonialConsumer = () => {
  return (
    <Layout>
      <div className="container mx-auto px-0">
        <Testimonialcobanner />

        <ConsumerTestimonialMiddle />

        <Truhelp />
      </div>
    </Layout>
  );
};

export default TestimonialConsumer;
