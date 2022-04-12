import React from "react";
import { ITS_DATA } from "../../../constants";
import ItpCard from "./ItpCard";

function ItpPages() {
    return (
        <div>
            <div className="my-5">
                <h1
                    className="fw-normal"
                    style={{
                        fontSize: "50px",
                        borderBottom: "2px solid black",
                    }}
                >
                    IN THE PRESS
                </h1>
            </div>
            <div>
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
        </div>
    );
}

export default ItpPages;
