import React from 'react'
import Layout from '../../layouts/Layout'
import SellBanner from './components/SellBanner/SellBanner'
import SellBottom from './components/SellBottom/SellBottom'
import SellMiddle from './components/SellMiddle/SellMiddle'

export default function Sell() {
  return (
    <div>
        <Layout>
            <div className='container mx-auto px-0'>
               <SellBanner />
               <SellMiddle />
               <SellBottom />
            </div>
        </Layout>
    </div>
  )
}
