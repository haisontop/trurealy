import React from "react";
import { Button } from "react-bootstrap";
import style from "./RepresentCommercial.module.scss";

export default function RepresentCommercial() {
    return (
        <div
            className={`row px-4 gx-5 gy-4 container mx-auto ${style["represent-commercial"]}`}
        >
            <div className="col-12 col-md-6">
                <img
                    src="/assets/agent directory/Group 321.png"
                    className="img-fluid"
                    alt=""
                />
            </div>
            <div className="col-12 col-md-6">
                <p className="mt-2 text-primary">
                    We represent commercial buyers, sellers, tenants, landlords,
                    and multi-family property investors.
                </p>
                <p className="mt-2 mt-md-5 text-primary">
                    Whether you’re looking for office, retail, land, or strictly
                    investment property, our commercial real estate team is here
                    for you. With decades of combined experience, Tru Commercial
                    has a solution for all your commercial real estate needs.
                </p>
                <button className="bg-pink px-5 text-white fs-4 fw-normal le py-2 me-2 border-0 mt-4 border-0 rounded">
                    BECOME A BETTER AGENT
                </button>
            </div>
        </div>
    );
}
