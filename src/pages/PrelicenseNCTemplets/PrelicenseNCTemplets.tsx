import React from 'react'
import Layout from '../../layouts/Layout'
import PrelicenseBanner from './Components/PrelicenseBanner/PrelicenseBanner'
import PrelicenseMiddleCard from './Components/PrelicenseCard/PrelicenseMiddleCard'

export default function PrelicenseNCTemplets() {
  return (
    <Layout>
        <div className='container mx-auto px-0 pb-5' style={{backgroundColor: "#0F0E4D"}}>
          <PrelicenseBanner />
          <PrelicenseMiddleCard />
        </div>
    </Layout>
  )
}
