import React from "react";
import style from "./CommercialBottom.module.scss";

export default function CommercialBottom() {
    return (
        <div className="position-relative">
            <div className={style["commercial-bottom-banner"]}></div>
            <div className={style["commercial-bottom-banner-bg"]}></div>
            <div
                className={`text-center text-white ${style["commercial-bottom"]}`}
            >
                <h1 className="fw-medium">JOIN 100+ AGENTS IN 30+</h1>
                <button className="border-0 bg-pink text-white fs-4 px-5 py-1 mt-5">
                    Join the TRU Team
                </button>
            </div>
        </div>
    );
}
