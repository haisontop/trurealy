import React from "react";
import style from "./SellBottom.module.scss";

export default function SellBottom() {
    return (
        <div className={`${style["sell-bottom"]}`}>
            <h1>SELL MY HOME WITH TRU</h1>
            <div className="text-center">
                <button className="mt-3 font-lighter text-white px-5 py-1 fs-4 bg-pink border-0">
                    FIND AN AGENT
                </button>
            </div>
        </div>
    );
}
