import React, { useState } from "react";
import style from "./FaqCard.module.scss";
interface props {
    title: string;
    discription: string;
}

const FaqCard = ({ title, discription }: props) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="my-3 my-md-5 text-center">
            <div onClick={() => setOpen(!open)} className="cursor-pointer">
                <p className="fw-normar fs-2">{title}</p>
            </div>
            {open && (
                <p className={`text-start ps-5 ${style["description"]}`}>
                    {discription}
                </p>
            )}
        </div>
    );
};

export default FaqCard;
