import React from 'react'
import RentBody from '../../components/rent/RentBody'
import SellBotom from '../../components/sell/SellBotom'
import Layout from '../../layouts/Layout'

export default function Rent() {
  return (
  <Layout>
      <div className='container px-0 mx-auto'>
           <RentBody />
           <SellBotom />
      </div>
  </Layout>
  )
}
