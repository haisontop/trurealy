import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import style from './SmarterAgent.module.scss';

interface LinkModel {
  href: string;
  name: string;
}

interface SmaterCardProps {
  actions: string;
  discription: string;
  link: LinkModel;
  img: string;
  bgColor : string;
}

const Smartercard = ({ actions, discription, link, img, bgColor}: SmaterCardProps) => {
  return (
    <div className="col-4">
      <div className={`position-relative overflow-hidden ${style["smarter-box-2"]}`}>
        <img src={img} alt="" className="img-fluid" width="100%" />
        <div className={`position-absolute bottom-0 ${bgColor} px-4 pt-2 pb-3 text-white ${style["smarter-card-anim"]}`}>
          <h3 className="fw-normal mb-0">{actions}</h3>
          <p className="mt-4">{discription}</p>
          <div className="mt-5 pt-5">
            <Link to={link.href} style={{ textDecoration: "none" }}>
              <div className="text-white d-flex">
                <p className="pointer fw-normal">
                  {link.name}
                </p>
                <AiOutlineArrowRight size="30px" className="ms-2 mb-2" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smartercard;
