import React from "react";
import BuildingBloxPodcastBody from "./components/BuildingBloxPodcastBody";
import Layout from "../../layouts/Layout";
import { Button } from "react-bootstrap";
import { BuildingBloxPodcastHelp } from "./components/BuildingBloxPodcastHelp";

export default function BuildingBloxPodcast() {
    return (
        <Layout>
            <div className="container  mx-auto">
                <BuildingBloxPodcastBody />
                <BuildingBloxPodcastHelp title="Find Us Anywhere, And We Will Find Your TRU Calling">
                    <>
                        <Button variant="primary link">
                            Join the Tru Team
                        </Button>
                        <Button variant="primary link">Become an Agent</Button>
                    </>
                </BuildingBloxPodcastHelp>
            </div>
        </Layout>
    );
}
