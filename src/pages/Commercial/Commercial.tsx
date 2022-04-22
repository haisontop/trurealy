import React from 'react'
import Layout from '../../layouts/Layout'
import CommercialBanner from './components/CommercialBanner/CommercialBanner'
import CommercialCardGroup from './components/CommercialCardGroup/CommercialCardGroup'
import TruCommercial from './components/TruCommercial/TruCommercial'


export default function Commercial() {
  return (
    <Layout>
        <div className="container mx-auto px-0">
          <CommercialBanner />
          <TruCommercial />
          <CommercialCardGroup />
        </div>
    </Layout>
  )
}
