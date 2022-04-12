import React from "react";
import style from "./BannerText.module.scss"

interface BannerProps {
    title: string;
    description: string;
}

export const BannerText = (props: BannerProps) => {
    const { title, description } = props;

    return (
        <div className={`position-absolute ${style['banner-cols']} text-white w-100 px-5 pt-4`}>
            <hr style={{ width: "35%", height: "3px" }} className="mb-3" />
            <h2 className="fw-bolder text-uppercase">
                {title}
            </h2>
            <p className="mt-4 fs-5">{description}</p>
        </div>
    );
};
