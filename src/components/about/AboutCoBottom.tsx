import React from 'react';

const Aboutcobottom = () => {
    return (
       <div className='bg-primary text-center py-5 my-5'>
          <div className='container mx-auto text-white'>
              <h1>Find a dream home with TRU, or join <br /> over 100 TRU agents.</h1>
              <div>
              <button
                 className="bg-pink px-5 text-white fs-4 fw-normal le py-2 me-2 border-0 mt-3"
                 style={{ borderRadius: "10px" }}
                 >
                 Join The Tru Team
              </button>
              <button
                 className="bg-pink px-5 text-white fs-4 fw-normal le py-2 border-0 mt-3"
                 style={{ borderRadius: "10px" }}
                 >
                 Become An Agent
              </button>
              </div>
          </div>
       </div>  
    );
}

export default Aboutcobottom;
