import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./SmarterCard.module.scss";

interface LinkModel {
  href: string;
  name: string;
}

interface SmaterCardProps {
  actions: string;
  discription: string;
  link: LinkModel;
  img: string;
}

const Smartercard = ({ actions, discription, link, img }: SmaterCardProps) => {
  return (
    <div className="col-4">
      <div className={`position-relative overflow-hidden ${styles['smarter-box-2']}`}>
        <img src={img} alt="" className="img-fluid" />
        <div className={`position-absolute bottom-0 bg-pink px-3 py-2 text-white ${styles["smarter-card-anim"]}`}>
          <h3 className="fw-normal mb-0">{actions}</h3>
          <hr
            style={{ height: "3px", backgroundColor: "white", width: "70%" }}
            className="mt-1 bg-white border-0"
          />
          <p className="mt-1 fw-lighter">{discription}</p>
          <div className="mt-5 pt-4">
            <Link to={link.href} style={{ textDecoration: "none" }}>
              <div className="text-white">
                <span style={{ cursor: "pointer" }} className="fs-5">
                  {link.name}
                </span>
                <AiOutlineArrowRight size="20px" className="ms-1 mb-2" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smartercard;
