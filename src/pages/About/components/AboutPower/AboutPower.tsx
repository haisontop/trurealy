import React from "react";
import { GradientDivider } from "../../../../components/GradientDivider";
import style from "./AboutPower.module.scss";

const AboutPower = () => {
    return (
        <div className={`container mx-auto text-center py-5 ${style["About-Power"]}`}>
            <h1>WE POWER THE GROWTH OF THOUSENDS</h1>
            <div className="row mt-5 mb-3 mt-5">
                <div className="col-4">
                    <h1 className="fw-bold text-info">
                        19
                    </h1>
                    <span className="fw-bolder">
                        Teammates
                    </span>
                </div>
                <div className="col-4">
                    <h1 className="fw-bold text-light-primary">
                        127
                    </h1>
                    <span className="fw-bolder">
                        Agents
                    </span>
                </div>
                <div className="col-4">
                    <h1 className="fw-bold text-danger">
                        10,000
                    </h1>
                    <span className="fw-bolder">
                        Customers
                    </span>
                </div>
            </div>
            <div className="mx-auto">
                <GradientDivider size="md" direction="rtl" />
            </div>
        </div>
    );
};

export default AboutPower;
