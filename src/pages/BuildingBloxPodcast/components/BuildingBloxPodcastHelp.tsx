import React from "react";
import { Row, Col, Button } from "react-bootstrap";

interface BuildingBloxPodcastHelpProps {
    title: String;
    children: React.ReactNode;
}

export const BuildingBloxPodcastHelp = (
    props: BuildingBloxPodcastHelpProps
) => {
    const { title, children } = props;
    return (
        <>
            <div className="partnrup_sec cmmn_gap">
                <div className="custom_container_fluid">
                    <div
                        className="prtnr_box aos-init aos-animate"
                        data-aos="fade-up"
                    >
                        <div className="page_heading text-center">
                            <h2>{title}</h2>
                        </div>
                        <div className="btn_outr">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
};
