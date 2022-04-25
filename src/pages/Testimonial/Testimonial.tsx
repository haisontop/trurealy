import React from "react";
import TestimonialBanner from "./components/TestimonialBanner";
import TestimonialMiddle from "./components/TestimonialMiddle";
import Layout from "../../layouts/Layout";
import { TrueHelp } from "../../components/TruHelp";
import style from "./Testimonial.module.scss";

interface TestimonialProps {
    bgTheme?: "dark" | "light";
}

const TestimonialConsumer = ({ bgTheme }: TestimonialProps) => {
    const containerBg = React.useMemo(() => {
        let bgClassName = "";
        if (bgTheme === "dark") {
            bgClassName = "bg-dark-primary";
        }

        return bgClassName;
    }, [bgTheme]);

    return (
        <Layout>
            <div className={`container mx-auto px-0 pt-2 ${containerBg}`}>
                <TestimonialBanner />

                <TestimonialMiddle />

                <div
                    className={`text-center text-white ${style["tst-btm-bnnr"]}`}
                >
                    <h1 className="fw-normal display-1">
                        PARTNER WITH SMARTER AGENTS
                    </h1>
                    <button className="bg-pink text-white px-5 py-2 fs-3 border-0 rounded rounded-4 mt-3">
                        Find An Agent
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default TestimonialConsumer;
