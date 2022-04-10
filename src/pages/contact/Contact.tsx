import React from 'react'
import Layout from '../../layouts/Layout'
import {FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn} from 'react-icons/fa'

export default function Contact() {
  return (
      <Layout>
    <div className='container mx-auto row mt-5 pt-5 position-relative' style={{width: "900px"}}>
        <div className='col-6'>
             <div>
                   <h1 className='fw-bold'>CONTACT US!</h1>
                   <p className='fs-5'>WE'D LOVE TO HEAR FROM YOU.</p>
             </div>
             <div className='mt-5'>
                <h5 className='fw-normal'>Phone</h5>
                <p className='my-0'>555.555.5555</p>
             </div>
             <div className='mt-5'>
               <h5 className='fw-normal'>Email</h5>
               <p className='my-0'>Info@trurealty.com</p>
             </div>
             <div className='mt-5'>
                 <h5 className='fw-normal'>Corporate Headquarters</h5>
                <p className='my-0'>7373 N. Scottsdale Rd A100</p>
                <p className='my-0'>Scottsdale, AZ 85253</p>
             </div>
             <div className='d-flex mt-5'>
                <FaFacebookF size="40" className='p-2 rounded rounded-circle text-primary me-4' style={{border: "1px solid #292670", cursor: "pointer"}} />
                <FaInstagram size="40" className='p-2 rounded rounded-circle text-primary me-4' style={{border: "1px solid #292670", cursor: "pointer"}} />
                <FaYoutube size="40" className='p-2 rounded rounded-circle text-primary me-4' style={{border: "1px solid #292670", cursor: "pointer"}} />
                <FaLinkedinIn size="40" className='p-2 rounded rounded-circle text-primary me-4' style={{border: "1px solid #292670", cursor: "pointer"}} />
             </div>
        </div>
        <div className='col-6'>
            <div className='contact-box position-absolute end-0'>
               <form className='bg-primary text-white px-4 py-5' style={{borderRadius: "20px", marginBottom: "-30px", marginLeft:"-30px"}}>
                   <div className="w-100">
                       <span>Name<sup className='text-danger'>*</sup></span><br />
                       <input type="text" name="name" className='w-100 px-2 py-2 bg-primary text-white mt-1'style={{border: "2px solid #44498C", borderRadius: "7px"}} />
                   </div>
                   <div className='mt-4'>
                       <span>Contact<sup className='text-danger'>*</sup></span><br />
                       <input type="text" name="number" className='w-100 px-2 py-2 bg-primary text-white mt-1'style={{border: "2px solid #44498C", borderRadius: "7px"}} />
                   </div>
                   <div className='mt-4'>
                       <span>Email<sup className='text-danger'>*</sup></span><br />
                       <input type="email" name="email" className='w-100 px-2 py-2 bg-primary text-white mt-1'style={{border: "2px solid #44498C", borderRadius: "7px"}} />
                   </div>
                   <div className='mt-4'>
                       <span>Your massage<sup className='text-danger'>*</sup></span><br />
                       <textarea name="massage" className='w-100 px-2 py-2 bg-primary text-white mt-1'style={{border: "2px solid #44498C", borderRadius: "7px", outline:"none"}} />
                   </div>
                   <div className='text-center'>
                      <button className='py-2 mt-4 px-5 text-white bg-pink border-0 rounded'>Submit</button>
                   </div>
               </form>
            </div>
        </div>
      </div>
    </Layout>
  )
}
