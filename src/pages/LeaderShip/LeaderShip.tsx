import React from 'react'
import LeaderShipMiddle from '../../components/LeaderShip/LeaderShipMiddle'
import LeaderShipTop from '../../components/LeaderShip/LeaderShipTop'
import Layout from '../../layouts/Layout'

export default function LeaderShip() {
  return (
    <div>
         <Layout>
             <div className='container mx-auto'>
               <LeaderShipTop />
               <LeaderShipMiddle />
             </div>
         </Layout>
    </div>
  )
}
