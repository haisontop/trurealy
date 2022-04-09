import React from 'react'

export default function BuyBody() {
  return (
    <div className='position-relative'>
      <div className='mx-auto mt-5' style={{width: "1200px"}}>
         <div>
             <h1 className='fw-normal' style={{fontSize:"60px"}}>FIND YOUR TRU HOME</h1>
             <hr style={{height: "5px"}} />
             <p className='mt-4 fs-4'>A home purchase is more than a transaction, it’s a life changer. Tru Realty works with you throughout the buying process, from browsing properties to making a carefully negotiated offer. If you’re looking to buy a home, our friendly and knowledgeable real estate agents are here to help you exceed your real estate goals.</p>
             <p className='mt-5 pt-3 fs-4'>Tru agents will help you explore the many wonderful homes for sale in the communities you might call home.</p>
           </div>
           <div className='mt-5 text-center'>
               <img src="/assets/US map.png" className="img-fluid mx-5" alt="" />
           </div>
           <div className='text-center mt-5 pt-5'>
             <form className='mx-auto'>
                 <input type="text" className='px-2 fs-4 me-2' placeholder='Seach by Address, City, Zip Code, etc.' style={{width: "500px", border: "0px, 2px, 0px, 0px"}} />
                 <button className='tru-help-btn fs-4 px-3 py-1 text-white'>SEARCH</button>
             </form>
           </div>
      </div>
      <img src="/assets/Path 114.png" className='img-fluid position-absolute top-0 end-0' alt="" style={{marginTop: "-50px", zIndex: "-100"}} />
      <img src="/assets/Path 107.png" className='img-fluid position-absolute start-0 bottom-0' width="300px" alt="" style={{marginBottom: "-50px", zIndex: "-100"}} />
    </div>
  )
}
