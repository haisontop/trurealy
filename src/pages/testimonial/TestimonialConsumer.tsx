import React from "react";
import Truhelp from "../../components/shared/TruHelp";
import Testimonialcobanner from "../../components/testimonial/TestimonialCoBanner";
import Testimonialcomiddle from "../../components/testimonial/TestimonialComiddle";
import Layout from "../../layouts/Layout";

const Testimonialconsumer = () => {
  return (
    <Layout>
      <div className="container mx-auto px-0">
        <Testimonialcobanner />
         <Testimonialcomiddle />
        <Truhelp />
      </div>
    </Layout>
  );
};

export default Testimonialconsumer;
