import React from 'react'
import GivingBackcoBanner from '../../components/GivingBack/GivingBackcoBanner'
import GivingBackMiddle from '../../components/GivingBack/GivingBackMiddle'
import GivingBottom from '../../components/GivingBack/GivingBottom'
import GivingComapanyLogo from '../../components/GivingBack/GivingComapanyLogo'
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
