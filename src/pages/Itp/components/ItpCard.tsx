import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import style from "./Itp.module.scss";

interface props{
    key: string;
    author: string;
    title: string;
    img: string;
    discription: string;
}

function ItpCard({author, title, img, discription} : props) {
    const [clicked, setClicked] = useState(false);
  return (
    <div className={`row m-3 p-5 gx-5`}>
         <div onClick={()=>setClicked(true)} className={`col-5 overflow-hidden position-relative ${style["itp-card"]}`}>
           <img src={img} className={`img-fluid ${style["col-image"]}`} width="100%" alt="" />
           {
               clicked &&
               <div onClick={()=>setClicked(false)} className={`position-absolute ${style['col-img-anim']}`}>
                  <Link to="/">
                    <p>READ MORE</p>
                  </Link>
               </div>
           }
         </div>
         <div className='col-7 text-primary'>
            <h3 className='fw-bold'>{title}</h3>
            <p className='mt-1 fw-medium' style={{color: "#8F8F8F"}}>{author}</p>
            <p className='fw-medium'>{discription}</p>
         </div>
    </div>
  )
}

export default ItpCard
