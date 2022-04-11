import React from 'react'
import BuyBody from '../../components/Buy/BuyBody'
import BuyBottom from '../../components/Buy/BuyBottom'
import Layout from '../../layouts/Layout'

export default function Buy() {
  return (
    <div>
      <Layout>
          <div className='container mx-auto px-0'>
               <BuyBody />
               <BuyBottom />
          </div>
      </Layout>
    </div>
  )
}
