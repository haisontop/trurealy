import React from 'react'
import Layout from '../../layouts/Layout'
import CommercialBanner from './component/CommercialBanner/CommercialBanner'
import CommercialBottom from './component/CommercialBottom/CommercialBottom'
import CommercialCardGroup from './component/CommercialCardGroup/CommercialCardGroup'
import RepresentCommercial from './component/RepresentCommercial/RepresentCommercial'
import TruCommercial from './component/TruCommercial/TruCommercial'


export default function Commercial() {
  return (
    <Layout>
        <div className="container mx-auto px-0">
          <CommercialBanner />
          <TruCommercial />
          <CommercialCardGroup />
          <RepresentCommercial />
          <CommercialBottom />
        </div>
    </Layout>
  )
}
