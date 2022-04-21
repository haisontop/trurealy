import React from 'react'
import LeaderShipTop from './components/LeaderShipTop'
import Layout from '../../layouts/Layout'
import LeadershipCarousel from './components/LeadershipCarousel'

export default function LeaderShip() {
  return (
    <div>
         <Layout>
             <div className='container mx-auto leadership px-0'>
               <LeaderShipTop />
               <LeadershipCarousel />
             </div>
         </Layout>
    </div>
  )
}
