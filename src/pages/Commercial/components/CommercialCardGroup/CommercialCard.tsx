import React from 'react';
import { Link } from 'react-router-dom';
import style from "./CommercialCardGroup.module.scss";

interface props {
    name : string;
    link : string;
    email : string;
    img : string;
}

export default function CommercialCard({name, link , email, img} : props) {
  return (
    <div className={`mx-5 position-relative overflow-hidden ${style["commercial-card"]}`}>
        <div className=''>
           <img src={img} alt="" className='img-fluid' width="100%" />
        </div>
        <div className={`position-absolute bottom-0 bg-primary text-white p-2 p-md-4 ${style["card-bottom"]}`}>
            <h5 className='m-0 fw-bold'>{name}</h5>
            <p className='m-0'>{email}</p>
            <Link
            to={link}
            >
                <p className='m-0 text-white fw-bold'>See Bio </p>
            </Link>
        </div>
    </div>
  )
}
