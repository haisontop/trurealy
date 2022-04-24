import React from "react";
import { GradientDivider } from "../../../../components/GradientDivider";
import style from "./AboutPower.module.scss";

const AboutPower = () => {
    return (
        <div className={`container mx-auto text-center px-md-5 ${style["About-Power"]}`}>
            <h1 className="fw-bold text-primary">HELPING THOUSANDS FIND THEIR WAY HOME</h1>
            <div className="row mt-5 mb-3 mt-5">
                <div className="col-4">
                    <h2 className="fw-medium text-info">
                        19
                    </h2>
                    <span className="fw-medium">
                        Teammates
                    </span>
                </div>
                <div className="col-4">
                    <h3 className="fw-medium">
                        127
                    </h3>
                    <span className="fw-medium">
                        Agents
                    </span>
                </div>
                <div className="col-4">
                    <h4 className="fw-medium text-danger">
                        10,000
                    </h4>
                    <span className="fw-medium">
                        Customers
                    </span>
                </div>
            </div>
            <div className="mx-auto">
                <div className={style['grdient-driver']} />
            </div>
        </div>
    );
};

export default AboutPower;
