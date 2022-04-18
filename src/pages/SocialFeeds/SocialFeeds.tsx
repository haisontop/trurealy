import React from "react";
import Layout from "../../layouts/Layout";
import frame_img from "../../../src/assets/image/frame_img.png";
import "./SocialFeeds.scss";
function SocialFeeds() {
    return (
        <>
            <Layout>
                <section className="social-feeds-main">
                    <div className="social_instagram_section">
                        <h4>INSTAGRAM</h4>
                        <div className="instagram_box_wrapper">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div className="box_section"></div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="box_section"></div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="box_section"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="social_instagram_section">
                        <h4>TWITTER & FACEBOOK</h4>
                        <div className="twitter_section row">
                            <div className="col-lg-5 col-md-5 twitter_txt_section">
                                <div className="twitter_txt">
                                    <p>God help us, we're in the hands of engineers. Must go
                                         faster... go, go, go, go, go! What do they got in there?
                                         King Kong? God creates dinosaurs. God destroys dinosaurs.
                                         God creates Man. Man destroys God. Man creates Dinosaurs.
                                         Yes, Yes, without the oops!</p>
                                    <ul>
                                        <li>11</li>
                                        <li>11</li>
                                    </ul>
                                    <div className="back_btn">
                                        <a href="#">Back</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="twitter_txt">
                                    <img src={frame_img} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default SocialFeeds;
