import React from "react";
import style from "./SellBanner.module.scss";

export default function SellBanner() {
    return (
        <>
            <div className={`${style["sell-banner"]}`}>
                <h1 className="display-1">A PROACTIVE</h1>
                <h1 className="display-1">APPROACH TO SELLING </h1>
            </div>
            <div className={`${style["linear-gradian"]}`} />
        </>
    );
}
