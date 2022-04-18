import React, { useState } from 'react';
interface props {
    title: string;
    discription: string;
}
import style from "./faq.module.scss"
const Faqcard = ({title, discription}: props) => {
    const [open, setOpen] = useState(false);
    return (
        <div className='my-5 text-center'>
        <div onClick={() => setOpen(!open)} style={{cursor: "pointer"}}>
           <p className='fw-normar fs-3'>{title}</p>
        </div>
        { open &&
            <p className='text-start ps-5' style={{width: "70%", marginLeft:"20px"}}>
                {discription}
            </p>
        }
    </div>
    );
}

export default Faqcard;
