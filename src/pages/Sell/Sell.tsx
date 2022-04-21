import React from 'react'
import { SellBody } from './components/SellBody'
import SellBotom from './components/SellBotom'
import SellGrid from './components/SellGrid'
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
