import React from "react";
import BuildingBloxPodcastBody from "./components/BuildingBloxPodcastBody";
import Layout from "../../layouts/Layout";
import { Button } from "react-bootstrap";
import { BuildingBloxPodcastHelp } from "./components/BuildingBloxPodcastHelp";
import "./BuildingBloxPodcast.scss";

export default function BuildingBloxPodcast() {
    return (
        <Layout>
            <section className="BuildingBloxPodcastWarper">
                <BuildingBloxPodcastBody />
                <BuildingBloxPodcastHelp title="Find Us Anywhere, And We Will Find Your TRU Calling">
                    <>
                        <ul className="btn_lnks">
                            <li>
                                {" "}
                                <a href="#url" className="basic_btn">
                                    Join the Tru Team
                                </a>
                            </li>
                            <li>
                                {" "}
                                <a href="#url" className="basic_btn">
                                    Become an Agent
                                </a>
                            </li>
                        </ul>
                    </>
                </BuildingBloxPodcastHelp>
            </section>
        </Layout>
    );
}
