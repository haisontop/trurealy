import React from 'react';
import Link from 'next/link'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Smartercard = ({actions, discription, link, img}) => {
    return (
        <div className='col-4'>
            <div className='position-relative overflow-hidden smarter-box-2'>
            <img src={img} alt="" className='img-fluid'/>
            <div className='position-absolute bottom-0 bg-pink px-3 py-2 text-white smarter-card-anim'>
               <h3 className='fw-normal mb-0'>{actions}</h3>
               <hr style={{height: "3px", backgroundColor:"white", width:"70%"}} className="mt-1 bg-white border-0" />
               <p className='mt-1 fw-lighter'>{discription}</p>
               <div className='mt-5 pt-4'>
                 <Link href={link.href}>
                     <div>
                        <span style={{cursor: "pointer"}} className="fs-5">
                          {link.name}
                        </span>
                        <AiOutlineArrowRight size="20px" className='ms-1 mb-2' />
                     </div>
                 </Link>
               </div>
            </div>
            </div>
        </div>
    );
}

export default Smartercard;
