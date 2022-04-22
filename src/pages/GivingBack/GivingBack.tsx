import React from 'react'
import GivingBackcoBanner from './components/GivingBackBanner/GivingBackcoBanner'
import GivingBackMiddle from './components/GivingBackMiddle'
import GivingBottom from './components/GivingBottom/GivingBottom'
import GivingComapanyLogo from './components/GivingCompanyLogo/GivingComapanyLogo'
import Layout from '../../layouts/Layout'

function GivingBack() {
  return (
    <div>
        <Layout>
            <div className='container px-0 mx-auto'>
                <GivingBackcoBanner />
                <GivingComapanyLogo />
                <GivingBackMiddle />
                <GivingBottom />
            </div>
        </Layout>
    </div>
  )
}

export default GivingBack
