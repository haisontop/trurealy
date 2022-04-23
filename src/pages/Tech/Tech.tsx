import React from "react";
import TechBody from "./components/TechBody";
import Layout from "../../layouts/Layout";
import { Button } from "react-bootstrap";
import { TechHelp } from "./components/TechHelp";

export default function Tech() {
    return (
        <Layout>
            <div className="container  mx-auto">
                <TechBody />
                <TechHelp title="Find a dream home with TRU, or join over 100 TRU agents.">
                    <>
                        <Button variant="primary link">
                            Join the Tru Team
                        </Button>
                        <Button variant="primary link">Become an Agent</Button>
                    </>
                </TechHelp>
            </div>
        </Layout>
    );
}
