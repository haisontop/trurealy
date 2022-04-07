import React from 'react';

const Aboutpower = () => {
    return (
        <div className='container mx-auto text-center py-5'>
            <h1>WE POWER THE GROWTH OF THOUSENDS</h1>
            <div className='row mt-5 mb-3 mt-5'>
                 <div className='col-4'>
                     <h1 className='fw-bold'style={{color: "#1592D1"}}>19</h1>
                     <span className='fw-bolder' style={{color : "#808080"}}>Teammates</span>
                 </div>
                 <div className='col-4'>
                     <h1 className='fw-bold'style={{color: "#93488B"}}>127</h1>
                     <span className='fw-bolder' style={{color : "#808080"}}>Agents</span>
                 </div>
                 <div className='col-4'>
                     <h1 className='fw-bold'style={{color: "#FC084F"}}>10,000</h1>
                     <span className='fw-bolder' style={{color : "#808080"}}>Customers</span>
                 </div>
            </div>
            <div className="gradient-divider-2 mx-auto" />
        </div>
    );
}

export default Aboutpower;
