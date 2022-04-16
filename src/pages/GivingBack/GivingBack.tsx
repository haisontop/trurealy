import React from 'react'
import GivingBackcoBanner from './components/GivingBackcoBanner'
import GivingBackMiddle from './components/GivingBackMiddle'
import GivingBottom from './components/GivingBottom'
import GivingComapanyLogo from './components/GivingComapanyLogo'
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
