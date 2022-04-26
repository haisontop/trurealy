import React from "react";
import style from "./TruCommercial.module.scss";

export default function TruCommercial() {
    return (
        <>
            <div className={`${style["tur-commercial"]}`}>
                <div className={`${style["linear-desing"]}`} />
                <div className={`bg-primary text-white ${style["slogun-div"]}`}>
                    <h4 className="fs-1">
                        TRU COMMERCIAL challenges the industry norms to create
                        an alternative way to buy and sell commercial real
                        estate across the country that better serves both
                        clients and brokers alike.{" "}
                    </h4>
                </div>
                <div className="ps-5 ms-5 mt-5">
                    <p className="mt-2 text-primary fs-3">
                        With a wide array of advanced technology tools coupled
                        with Tru Realty’s own network of wholesale buyers, the
                        Tru Commercial team provides an outstanding real estate
                        experience to business professionals. Our experts guide
                        you through key negotiations to make the best decisions
                        possible to help you exceed your real estate goals.
                    </p>
                    <button className="bg-pink px-5 text-white fs-4 fw-normal le py-2 me-2 border-0 mt-4 border-0 rounded rounded-3">
                        BECOME A BETTER AGENT
                    </button>
                </div>
            </div>
        </>
    );
}
