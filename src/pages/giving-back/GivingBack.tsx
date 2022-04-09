import React from 'react'
import GivingBackcoBanner from '../../components/giving-back/GivingBackcoBanner'
import GivingBackMiddle from '../../components/giving-back/GivingBackMiddle'
import GivingBottom from '../../components/giving-back/GivingBottom'
import GivingComapanyLogo from '../../components/giving-back/GivingComapanyLogo'
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