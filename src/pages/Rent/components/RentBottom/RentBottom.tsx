import React from "react";
import style from "./RentBottom.module.scss";

export default function RentBottom() {
    return (
        <div className={`px-5 ${style["buy-bottom"]}`}>
            <h1>FIND YOUR DREAM HOME</h1>
            <div className="text-center">
                <button className="mt-3 font-lighter text-white px-5 py-1 fs-4 bg-pink border-0">
                    FIND AN AGENT
                </button>
            </div>
        </div>
    );
}
