import React from "react";
import SocialMiddle from "./components/SocialMiddle";
import SocialTop from "./components/SocialTop/SocialTop";
import Layout from "../../layouts/Layout";

const Socialfeed = () => {
  return (
    <div>
      <Layout>
        <div className="container mx-auto">
          <SocialTop />
          <SocialMiddle />
        </div>
      </Layout>
    </div>
  );
};

export default Socialfeed;
