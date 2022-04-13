import React from "react";
import { GradientDivider } from "../GradientDivider";
import styles from "./MiddleBanner.module.scss";

interface MiddleBannerProps {
    title: string;
    description: string;
}

export const MiddleBanner = (props: MiddleBannerProps) => {
    const { title, description } = props;

    return (
        <>
            <div
                className={`${styles["middle-banner-container"]} py-5 text-white`}
            >
                <h1 className="pt-4 fw-bolder">{title}</h1>
                <h2 className="fw-lighter pb-4">{description}</h2>
            </div>
            <GradientDivider />
        </>
    );
};
