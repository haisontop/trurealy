import React from 'react'
import BuyBody from './components/BuyBody'
import BuyBottom from './components/BuyBottom'
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
