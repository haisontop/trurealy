import React from "react";
import TruBody from "./components/TruBody";
import Layout from "../../layouts/Layout";
import { Button } from "react-bootstrap";
import { TruHelp } from "./components/TruHelp";

export default function Tru() {
    return (
        <Layout>
            <div className="container  mx-auto">
                <TruBody />
                <TruHelp title="Find a dream home with TRU, or join over 100 TRU agents.">
                    <>
                        <Button variant="primary link">
                            Join the Tru Team
                        </Button>
                        <Button variant="primary link">Become an Agent</Button>
                    </>
                </TruHelp>
            </div>
        </Layout>
    );
}
