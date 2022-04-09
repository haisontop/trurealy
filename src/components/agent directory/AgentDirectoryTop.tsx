import React from 'react'

function AgentDirectoryTop() {
  return (
    <div>
        <h1 className='text-center fw-normal my-5' style={{fontSize: "50px"}}>HERE FOR YOU. HAPPY TO HELP.</h1>
        <form style={{width: "1000px"}} className='mx-auto row px-4 mt-5 mx-auto'>
            <div className='col-4'>
              <input type="text" className='border-0 w-100' placeholder="search by Agent Name" style={{outline: "none"}} />
              <hr className='mt-1' style={{height: "2px"}} />
            </div>
            <div className='col-6'>
                <input type="text" className='border-0 w-100' placeholder="search by, City, Zip Code etc." style={{outline: "none"}} />
                <hr className='mt-1' style={{height: "2px"}} />
            </div>
             <div className='col-2'>
               <button className='tru-help-btn text-white px-3 py-1'>SEARCH</button>
             </div>
        </form>
    </div>
  )
}

export default AgentDirectoryTop