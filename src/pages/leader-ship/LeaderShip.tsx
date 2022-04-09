import React from 'react'
import LeaderShipMiddle from '../../components/leader-ship/LeaderShipMiddle'
import LeaderShipTop from '../../components/leader-ship/LeaderShipTop'
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
