import React, { useState } from 'react';

const Faqconsumercard = ({title, discription}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className='my-5 text-center'>
        <div onClick={() => setOpen(!open)} style={{cursor: "pointer"}}>
           <p className='fw-normar fs-3'>{title}</p>
           <hr style={{width: "50%", height: "3px" , marginLeft: "20%"}} />
        </div>
        { open &&
            <p className='text-start' style={{width: "50%",  marginLeft: "20%"}}>
                {discription}
            </p>
        }
    </div>
    );
}

export default Faqconsumercard;
