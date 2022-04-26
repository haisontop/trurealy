import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Itp.module.scss";

interface props {
    key: string;
    author: string;
    title: string;
    img: string;
    discription: string;
}

function ItpCard({ author, title, img, discription }: props) {
    const [clicked, setClicked] = useState(false);
    return (
        <div className={`row mt-5 m-md-3 p-md-5 gx-md-5`}>
            <div
                onClick={() => setClicked(true)}
                className={`col-md-5 px-3 px-md-0 overflow-hidden position-relative ${style["itp-card"]}`}
            >
                <img
                    src={img}
                    className={`img-fluid ${style["col-image"]}`}
                    alt=""
                />
                {clicked && (
                    <div
                        onClick={() => setClicked(false)}
                        className={`position-absolute ${style["col-img-anim"]}`}
                    >
                        <Link to="/">
                            <p>READ MORE</p>
                        </Link>
                    </div>
                )}
            </div>
            <div
                className={`col-7 text-primary px-4 px-md-5 ${style["itp-card-body"]}`}
            >
                <h3 className="fw-bold mt-5 mt-md-0">{title}</h3>
                <p className="fw-medium">{author}</p>
                <p className="fw-medium m-0">{discription}</p>
            </div>
        </div>
    );
}

export default ItpCard;
