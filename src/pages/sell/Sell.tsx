import React from 'react'
import { SellBody } from '../../components/Sell/SellBody'
import SellBotom from '../../components/Sell/SellBotom'
import SellGrid from '../../components/Sell/SellGrid'
import Layout from '../../layouts/Layout'

export default function Sell() {
  return (
    <div>
        <Layout>
            <div className='container mx-auto px-0'>
                <SellBody />
                <SellGrid />
                <SellBotom />
            </div>
        </Layout>
    </div>
  )
}
