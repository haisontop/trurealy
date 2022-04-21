import React from "react";
import style from "./Itp.module.scss";
interface props {
    key: string;
    author: string;
    title: string;
    img: string;
    discription: string;
}

function ItpCard({ author, title, img, discription }: props) {
    return (
        <div className="row mb-5 pb-6">
            <div className="col-5">
                <img src={img} className="img-fluid" alt="" />
            </div>
            <div className="col-7">
                <h3 className="fw-normal">{title}</h3>
                <p className="mt-1 fw-normal text-full-gray">{author}</p>
                <p>{discription}</p>
            </div>
        </div>
    );
}

export default ItpCard;
