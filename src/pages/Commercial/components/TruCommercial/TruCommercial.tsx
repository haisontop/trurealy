import React from "react";
import style from "./TruCommercial.module.scss";

export default function TruCommercial() {
    return (
        <div className={`${style["tur-commercial"]}`}>
            <div className={`${style["linear-desing"]}`} />
            <div className={`bg-primary text-white ${style["slogun-div"]}`}>
                <h4>
                    TRU COMMERCIAL challenges the industry norms to create an
                    alternative way to buy and sell commercial real estate
                    across the country that better serves both clients and
                    brokers alike.{" "}
                </h4>
            </div>
        </div>
    );
}
