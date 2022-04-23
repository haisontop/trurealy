import React from "react";
import InvestWithTruBody from "./components/InvestWithTruBody";
import Layout from "../../layouts/Layout";
import { Button } from "react-bootstrap";
import { InvestWithTruHelp } from "./components/InvestWithTruHelp";

export default function InvestWithTru() {
    return (
        <Layout>
            <div className="container  mx-auto">
                <InvestWithTruBody />
                <InvestWithTruHelp title="Still have a few questions? Schedule a meeting!">
                    <>
                        <Button variant="primary theme link">
                        Contact Us
                        </Button>
                        <Button variant="primary theme link">See our FAQ</Button>
                    </>
                </InvestWithTruHelp>
            </div>
        </Layout>
    );
}
