import React from 'react';
import style from './AgentDirectory.module.scss';

function AgentDirectoryTop() {
  return (
    <div className={style["agent-directory-top"]}>
        <h1 className='text-center fw-normal my-5'>HERE FOR YOU. HAPPY TO HELP.</h1>
        <form className='mx-auto row px-4 mt-5 mx-auto'>
            <div className='col-4'>
              <input type="text" className='border-0 w-100' placeholder="search by Agent Name"/>
              <hr className='mt-1'/>
            </div>
            <div className='col-6'>
                <input type="text" className='border-0 w-100' placeholder="search by, City, Zip Code etc." />
                <hr className='mt-1' />
            </div>
             <div className='col-2'>
               <button className='tru-help-btn text-white px-3 py-1'>SEARCH</button>
             </div>
        </form>
    </div>
  )
}

export default AgentDirectoryTop
