import React from 'react'
import Layout from '../../layouts/Layout'
import CommercialBanner from './component/CommercialBanner/CommercialBanner'
import CommercialCardGroup from './component/CommercialCardGroup/CommercialCardGroup'
import TruCommercial from './component/TruCommercial/TruCommercial'


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
