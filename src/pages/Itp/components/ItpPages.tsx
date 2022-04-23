import React from "react";
import { ITS_DATA } from "../../../constants";
import ItpCard from "./ItpCard";
import style from "./Itp.module.scss";

function ItpPages() {
    return (
        <div className={`${style["itp-pages"]}`}>
            <div className="">
                <h1 className="text-white px-5 py-3">IN THE</h1>
            </div>
            <div className={`${style["itp-list"]}`}>
                {ITS_DATA.map((its) => (
                    <ItpCard
                        key={its.img}
                        title={its.title}
                        author={its.author}
                        discription={its.discription}
                        img={its.img}
                    />
                ))}
            </div>
            <div
                className={`bg-primary position-absolute ${style["side-style"]}`}
            />
        </div>
    );
}

export default ItpPages;
