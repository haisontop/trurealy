import React, { useEffect } from "react";
import Layout from "../../../layouts/Layout";
import "./AboutAgent.scss";

function AboutAgent() {
    useEffect(() => {
        let obj = document.body;
        obj.classList.add("darkMode");
        return () => {
            obj.classList.remove("darkMode");
        };
    }, []);
    return (
        <>
            <Layout>
                <div className="AboutAgentPage">
                    <section className="sectionOne">
                        <div className="px-3 px-sm-5">
                            <div className="px-xl-5">
                                <figure>
                                    <img
                                        src="/img/31.png"
                                        alt=""
                                        className="w-100"
                                    />
                                </figure>
                                <h1>
                                    INNOVATIVE, TECHNOLOGY DRIVEN,
                                    AGENT-CENTRIC.
                                </h1>
                            </div>
                        </div>
                        <div className="gline mt-5"></div>
                    </section>

                    <section className="sectionTwo  py-5">
                        <div className="ps-3 ps-sm-5">
                            <div className="ps-xl-5">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 pe-4 pe-sm-5 pe-md-0">
                                        <h2>OUR MISSION</h2>
                                        <p>
                                            To create a diverse and inclusive
                                            culture focused on training and
                                            education coupled with innovative
                                            technology to provide an
                                            unparalleled level of service to the
                                            agents and the communities we serve.
                                        </p>

                                        <div className="pt-4">
                                            <h1>WHO WE ARE</h1>

                                            <p>
                                                Headquartered in Scottsdale,
                                                Arizona, TRU is a tech-enabled
                                                real estate company and
                                                world-class education platform
                                                for agents who want to be a part
                                                of a movement in an inclusive,
                                                collaborative, and
                                                forward-thinking brokerage of
                                                the future.
                                            </p>
                                            <p className="mb-0">
                                                TRU Realty has elevated the
                                                quality of service to our
                                                clients by providing an
                                                unprecedented amount of support
                                                to its real estate agents. We
                                                are recognized as a modern,
                                                professional, tech-driven real
                                                estate company by both consumers
                                                and agents alike. The organic
                                                growth of the TRU Realty brand
                                                has garnered us a reputation for
                                                excellence nationwide and
                                                recognition for having some of
                                                the best agents across the
                                                country.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 mb-5 mb-md-0">
                                        <div className="imgBox">
                                            <img
                                                src="/img/32.png"
                                                alt=""
                                                className="w-100  img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="sectionThree">
                        <div className="px-3 px-sm-5">
                            <div className="px-xl-5">
                                <div className="heading mb-4">
                                    <i></i>
                                    <span className="px-4">FEATURED IN</span>
                                </div>
                                <ul className="row list-unstyled pt-2 align-items-center">
                                    {[33, 34, 35, 36, 37, 38].map((data) => {
                                        return (
                                            <li
                                                className="col-6 col-md-4 col-xl"
                                                key={data}
                                            >
                                                <figure>
                                                    <img
                                                        src={`/img/${data}.png`}
                                                        alt=""
                                                    />
                                                </figure>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="sectionFour pt-sm-5">
                        <div className="px-sm-5 pt-5">
                            <div className="px-xl-5 pt-5">
                                <div className="ps-5">
                                    <div className="gradient py-5  ">
                                        <div className="row align-items-center mx-0 ">
                                            <div className="col-lg-5">
                                                <figure className="m-0  ">
                                                    <img
                                                        src="/img/39.png"
                                                        alt=""
                                                    />
                                                </figure>
                                            </div>
                                            <div className="col-lg-7 pt-5 pt-lg-0">
                                                <div className="">
                                                    <h3>
                                                        Experience matters.{" "}
                                                    </h3>
                                                    <p>
                                                        At TRU Realty, we
                                                        approach every real
                                                        estate transaction with
                                                        unmatched insight,
                                                        intelligence, and care.
                                                        Our real estate agents
                                                        are setting the standard
                                                        for knowledge and
                                                        customer service in the
                                                        current market.
                                                    </p>
                                                    <p>
                                                        When you work with a TRU
                                                        Realty agent, you get a
                                                        skilled advisor and the
                                                        confidence that comes
                                                        from having an
                                                        outstanding real estate
                                                        team on your side during
                                                        the process of buying or
                                                        selling your home. We
                                                        measure our success by
                                                        the satisfaction of our
                                                        clients and the
                                                        difference our agents
                                                        make in their
                                                        communities each and
                                                        every day.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="sectionFive pt-5 ">
                        <div className="pe-3 pe-sm-5">
                            <div className="pe-xl-5">
                                <div className="bg-white whiteBox">
                                    <div className="px-3 px-sm-5 px-lg-0 ps-lg-5 py-5">
                                        <div className="px-xl-5 py-sm-5 ">
                                            <div className="row me-lg-0 ">
                                                <div className="col-lg-4">
                                                    <figure className="m-0">
                                                        <img
                                                            src="/img/40.png"
                                                            alt=""
                                                            className="w-100"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="col-lg-8 col-xl-7 ms-auto pt-5 pt-lg-0">
                                                    <div className="cont">
                                                        <h3>
                                                            LEADING WITH
                                                            CHARACTER AND
                                                            INTEGRITY - TRU
                                                            AGENTS
                                                        </h3>

                                                        <p>
                                                            Leading with
                                                            character and
                                                            integrity has helped
                                                            us attract the right
                                                            agents, build
                                                            lasting
                                                            relationships, and
                                                            establish our
                                                            reputation for
                                                            excellence in
                                                            education.
                                                        </p>
                                                        <p>
                                                            All TRU Realty
                                                            agents receive
                                                            state-of-the-art
                                                            training including
                                                            hands-on experience,
                                                            meeting with
                                                            industry
                                                            professionals, and
                                                            routine round-table
                                                            discussions with
                                                            mentors. When you
                                                            choose TRU, you
                                                            choose a better
                                                            experience and a
                                                            smarter agent.
                                                        </p>

                                                        <div className="buttonBox">
                                                            <button className="btn">
                                                                MATCH ME WITH AN
                                                                AGENT
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="sectionSix py-5 ">
                        <div className="px-3 px-sm-5 py-5">
                            <div className="px-xl-5 py-xl-5">
                                <div className="secTopPart">
                                    <h1 className="mb-4 mb-lg-5 pb-lg-4 text-center">
                                        BETTER AGENTS CALL TRU HOME
                                    </h1>

                                    <ul className="list-unstyled row justify-content-between pt-lg-5">
                                        <li className="col-auto">
                                            <div className="data">
                                                <b>30+</b>
                                                <small>States</small>
                                            </div>
                                        </li>
                                        <li className="col-auto">
                                            <div className="data">
                                                <b>127+</b>
                                                <small>Agents</small>
                                            </div>
                                        </li>
                                        <li className="col-auto">
                                            <div className="data">
                                                <b>10,000+</b>
                                                <small>Customers</small>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="my-5">
                                        <div className="line my-5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ps-3 ps-sm-5 ">
                            <div className="ps-xl-5">
                                <div className="customData">
                                    <div className="row">
                                        <div className="col-lg-5 mb-5 mb-lg-0 pb-5 pb-lg-0">
                                            <div className=" pe-5 pe-md-0">
                                                <figure className="m-0 ">
                                                    <img
                                                        src="/img/41.png"
                                                        alt=""
                                                        className="w-100"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 ms-lg-auto">
                                            <div className="cont ps-4 ps-sm-0">
                                                <div className="inner py-4 ps-4 ps-sm-5 pe-3">
                                                    <h1 className="mb-3 mb-sm-4">
                                                        #TRUSTORY
                                                    </h1>
                                                    <h3>Samantha Sloan,</h3>
                                                    <h4 className="mb-5">
                                                        TRU Realty Client
                                                    </h4>
                                                    <p>
                                                        I owe my career and
                                                        success as a real estate
                                                        agent to this company.
                                                        Their core values, team
                                                        community mindset, and
                                                        forward thinking outlook
                                                        set them apart in the
                                                        field. The training,
                                                        knowledge, and teamwork
                                                        are unmatched and make
                                                        you feel like you belong
                                                        and can succeed! So glad
                                                        I chose to work here and
                                                        thankful for everything
                                                        this group provides to
                                                        their agents!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="sectionSeven py-5 ">
                        <div className="px-3 px-sm-5">
                            <div className="px-md-5">
                                <div className="col-lg-10 p-0">
                                    <h1>LED BY VALUES</h1>
                                    <p>
                                        Defining our values is our way of
                                        sharing with you exactly who we are as
                                        professionals, as well as individuals,
                                        in our communities. Take a look at the
                                        attributes that make TRU one of the
                                        fastest growing real estate brokerages
                                        in the country.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="sectionEight py-5 ">
                        <div className="pe-3 pe-sm-5">
                            <div className="pe-lg-5">
                                <div className="dataBox">
                                    <div className="inner py-5 pe-4 pe-sm-5">
                                        <div className="ps-4 ps-sm-5">
                                            <div className="ps-xl-5">
                                                <ul className="row list-unstyled my-0 pe-lg-5 flex-xl-nowrap">
                                                    <li className="col-sm-6  col-md-4 col-xl">
                                                        <div className="dataCard">
                                                            <div className="ico">
                                                                <img
                                                                    src="/img/42.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <h6>Innovation</h6>
                                                        </div>
                                                    </li>
                                                    <li className="col-sm-6  col-md-4 col-xl">
                                                        <div className="dataCard">
                                                            <div className="ico">
                                                                <img
                                                                    src="/img/43.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <h6>Passion</h6>
                                                        </div>
                                                    </li>
                                                    <li className="col-sm-6  col-md-4 col-xl">
                                                        <div className="dataCard">
                                                            <div className="ico">
                                                                <img
                                                                    src="/img/44.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <h6>
                                                                Collaboration
                                                            </h6>
                                                        </div>
                                                    </li>
                                                    <li className="col-sm-6  col-md-4 col-xl">
                                                        <div className="dataCard">
                                                            <div className="ico">
                                                                <img
                                                                    src="/img/45.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <h6>Generosity</h6>
                                                        </div>
                                                    </li>
                                                    <li className="col-sm-6  col-md-4 col-xl">
                                                        <div className="dataCard">
                                                            <div className="ico">
                                                                <img
                                                                    src="/img/46.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <h6>
                                                                Transparency
                                                            </h6>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="sectionNine py-5 ">
                        <div className="ps-3 ps-sm-5">
                            <div className="ps-xl-5">
                                <div className="col-lg-6 mx-0">
                                    <h1 className="px-3 px-sm-0">
                                        Look where we’ve grown & still growing
                                        strong
                                    </h1>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 pe-5 mb-5 mb-lg-0">
                                        <div className="map mb-5 mb-lg-0">
                                            <img
                                                src="/img/47.svg"
                                                className="w-100"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="cont">
                                            <div className="inner ">
                                                <p>
                                                    Growing with intention has
                                                    allowed TRU Realty the
                                                    opportunity to improve the
                                                    buying and selling
                                                    experience for all of our
                                                    clients, agents and everyone
                                                    in between. TRU’s focus on
                                                    education and innovation has
                                                    prompted a nationwide
                                                    mandate for expansion
                                                    allowing us to better serve
                                                    consumers across the
                                                    country.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="sectionTen py-5 ">
                        <div className="px-3 px-sm-5">
                            <div className="px-xl-5">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="leftCont h-100">
                                            <h1>AGENT PROGRAMS</h1>
                                            <figure className="m-0 py-4">
                                                <img src="/img/48.png" alt="" />
                                            </figure>
                                            <p>
                                                Increase your streams of revenue
                                                through our amazing agent
                                                program offerings.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-unstyled   h-100 d-flex flex-column justify-content-between py-4 px-5">
                                            <li>
                                                <a href="">Learn & Earn</a>
                                            </li>
                                            <li>
                                                <a href="">Agent Equity</a>
                                            </li>
                                            <li>
                                                <a href="">Rev Share</a>
                                            </li>
                                            <li>
                                                <a href="">Agent Influencer</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="sectionEleven  ">
                        <img src="/img/49.png" alt="" draggable="false" />
                        <div className="cont">
                            <div className="px-3 px-sm-5">
                                <div className="px-md-5">
                                    <div className="px-0 col-md-10 mx-auto">
                                        <h1 className="mb-4">
                                            JOIN 100+ AGENTS IN 30+ STATES
                                            MAKING A TRU DIFFERENCE{" "}
                                        </h1>
                                        <div className="btnBox">
                                            <a href="">Join the TRU Team</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}

export default AboutAgent;
